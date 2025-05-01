# React ChatInput mit Dynamic Import

Dieses Projekt zeigt eine einfache Chat-Eingabe-Komponente in React. Der EmojiPicker wird nur geladen, wenn der Nutzer ihn wirklich braucht – dank `React.lazy` und `Suspense`.

## Features

- Dynamischer Import des EmojiPickers
- Schnellere initiale Ladezeit
- Zustand mit `useReducer` gesteuert
- Fallback während des Ladens

## Beispielcode (Auszug)

```jsx
const EmojiPicker = React.lazy(() => import("./EmojiPicker"));

{pickerOpen && (
  <Suspense fallback={<p>Loading...</p>}>
    <EmojiPicker />
  </Suspense>
)}
