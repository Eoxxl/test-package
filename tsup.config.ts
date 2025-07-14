import { defineConfig } from 'tsup'


export default defineConfig({
    entry: ["hello.ts"],
    format: ['esm', 'cjs'],
    outDir: 'build',
    dts: true,
    clean: true,
    // @ts-ignore
    outExtension({ format }) {
        console.log("FORMAT", format);
        return format === 'cjs' ? '.cjs' : '.mjs';
    }
})