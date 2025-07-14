import { globSync } from 'glob';
import { writeFileSync } from 'node:fs';
import { normalize } from 'node:path';

// Получаем все .ts файлы, кроме .d.ts и .test.ts
const matches = globSync('*.ts', {
    ignore: ['**/*.test.ts', '**/*.d.ts', 'node_modules/**', "*.config.ts"],
});

// Генерируем строки экспортов
const exports = matches.map((file) => {
    const withoutExt = file.replace(/\.ts$/, '');
    return `export * from "./${withoutExt}";`;
});

// Записываем в mod.ts
const output = exports.join('\n') + '\n';
writeFileSync('mod.ts', output);

console.log(`✅ mod.ts generated with ${exports.length} exports`);
