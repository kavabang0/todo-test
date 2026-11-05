<<<<<<< HEAD
# todo-test
it's todolist build on vite
=======
# Список задач

Простое приложение на React + TypeScript (Vite): добавление, выполнение, удаление, фильтр и сохранение в `localStorage`.

## Стек

- React 19
- TypeScript
- Vite
- SCSS CSS Modules

## Архитектура (FCD)

- **Domain** — типы и константы (`src/domain`)
- **Features** — сценарий задач: Context, reducer, хук (`src/features/todos`)
- **Components** — UI, страницы в `src/components/pages`

Хелперы лежат в `src/helpers/<name>/index.ts`.

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Время на задание

Ориентировочно 50 минут.
>>>>>>> 1b261e7 (Add a typed React todo app with FCD layers and localStorage.)
