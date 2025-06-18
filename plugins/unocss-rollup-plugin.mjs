// rollup-plugin-unocss.js
import { createGenerator } from '@unocss/core';
import presetUno from '@unocss/preset-uno';

export default function unocssRollupPlugin(options = {}) {
  let uno;
  let extractedTokens = new Set();

  return {
    name: 'unocss-rollup-plugin',

    async buildStart() {
      // Provide default UnoCSS configuration with presets
      const defaultConfig = {
        presets: [presetUno()],
        ...options.unocssConfig,
      };

      uno = await createGenerator(defaultConfig);
      extractedTokens = new Set();
      this.info('UnoCSS plugin build started.');
    },

    transform(code, id) {
      if (/\.(?:js|jsx|ts|tsx|vue|svelte|html)$/.test(id)) {
        // Extract class names using regex patterns
        // This covers className, class, and template literals
        const classRegex = /(?:class(?:Name)?|:class)=["'`]([^"'`]+)["'`]/g;
        const templateLiteralRegex = /(?:class(?:Name)?|:class)=\{[^}]*["'`]([^"'`]+)["'`][^}]*\}/g;

        let match;

        // Extract from regular class attributes
        while ((match = classRegex.exec(code)) !== null) {
          const classes = match[1].split(/\s+/).filter(Boolean);
          classes.forEach(cls => extractedTokens.add(cls));
        }

        // Extract from template literals and JSX expressions
        while ((match = templateLiteralRegex.exec(code)) !== null) {
          const classes = match[1].split(/\s+/).filter(Boolean);
          classes.forEach(cls => extractedTokens.add(cls));
        }

        // Additional extraction for utility classes in strings
        const utilityRegex = /["'`]([^"'`]*(?:bg-|text-|p-|m-|w-|h-|flex|grid|rounded|border)[^"'`]*)["'`]/g;
        while ((match = utilityRegex.exec(code)) !== null) {
          const classes = match[1].split(/\s+/).filter(Boolean);
          classes.forEach(cls => extractedTokens.add(cls));
        }

        this.debug(`UnoCSS: Processing ${id}, found ${extractedTokens.size} total tokens so far`);
      }

      return null; // Don't transform the code
    },

    async generateBundle(outputOptions, bundle) {
      if (extractedTokens.size === 0) {
        this.warn('UnoCSS: No utility classes found in the project.');
        return;
      }

      try {
        // Generate CSS from extracted tokens
        const result = await uno.generate(Array.from(extractedTokens));

        if (result.css) {
          const cssFileName = options.cssFileName || 'unocss.css';

          this.emitFile({
            type: 'asset',
            fileName: cssFileName,
            source: result.css,
          });

          this.info(`UnoCSS: Generated ${cssFileName} with ${result.css.length} bytes from ${extractedTokens.size} tokens.`);

          // Optional: Auto-inject CSS import
          if (options.injectCSS !== false) {
            const entryChunk = Object.values(bundle).find(
              chunk => chunk.type === 'chunk' && chunk.isEntry
            );

            if (entryChunk) {
              const importStatement = `import './${cssFileName}';\n`;
              entryChunk.code = importStatement + entryChunk.code;
              this.info(`UnoCSS: Injected CSS import into ${entryChunk.fileName}`);
            }
          }
        }
      } catch (error) {
        this.error(`UnoCSS: Failed to generate CSS - ${error.message}`);
      }
    },
  };
}