### Podejście i założenia

1. **React Router**: Wykorzystano React Router do zarządzania trasami w aplikacji.
2. **Strona potwierdzenia zamówienia**: Strona potwierdzenia zamówienia została zaimplementowana jako osobny plik HTML (`order-confirmation.html`) w folderze `public/`. Dane zamówienia są przekazywane za pomocą `localStorage`.
3. **Stan koszyka**: Zarządzanie koszykiem odbywa się za pomocą kontekstu React (`CartContext`).

## Instrukcje uruchomienia

Aby uruchomić kod należy wpisać
```
npm install
npm start
```

## Struktura projektu

- `src/` - Główne źródła aplikacji.
- `public/` - Pliki publiczne, w tym `order-confirmation.html`.
- `components/` - Komponenty wielokrotnego użytku.
- `context/` - Zarządzanie globalnym stanem aplikacji.
- `pages/` - Strony aplikacji.
