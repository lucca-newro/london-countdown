# 🚀 DEPLOY A VERCEL - PASO A PASO

## ✅ Lo que ya está listo:
- ✓ Proyecto compilado (`dist/` folder)
- ✓ Configuración de Vercel (`vercel.json`)
- ✓ GitHub integration ready
- ✓ Service Worker para offline
- ✓ PWA manifest

---

## 📋 PASOS PARA DEPLOYAR

### **Paso 1: Crear repo en GitHub**

1. Abre https://github.com/new
2. Nombre: `london-countdown`
3. Descripción: `220 días hacia Londres + 52 misiones secretas`
4. Click "Create repository"

### **Paso 2: Pushear el código**

En terminal (desde `/Users/luccavila/Desktop/london`):

```bash
git init
git add .
git commit -m "London Countdown PWA - Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/london-countdown.git
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu username de GitHub.

### **Paso 3: Conectar a Vercel**

1. Abre https://vercel.com/new
2. Click en "Continue with GitHub" (o login si es necesario)
3. Busca y selecciona **london-countdown**
4. Vercel auto-detecta:
   - Framework Preset: Vite ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `dist` ✓
5. Click **"Deploy"**

**¡LISTO!** Vercel te da un link como:
```
https://london-countdown.vercel.app
```

---

## 📱 USAR LA APP EN IPHONE 15 PRO

1. **Abre el link en Safari**
   ```
   https://london-countdown.vercel.app
   ```

2. **Toca el botón ⬆️ (arriba a la derecha)**

3. **Scrollea y tapa "Agregar a Inicio"**

4. **Toca "Agregar"**

5. **¡Listo! App instalada en home screen** 🎉

---

## 🔄 ACTUALIZAR LA APP

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Description del cambio"
git push origin main
```

**Vercel redeploya automáticamente en 1-2 minutos.**

---

## 🛠️ DESARROLLO LOCAL

```bash
npm run dev
```

Abre http://localhost:3000

---

## 📦 Estructura Final

```
london-countdown/
├── public/              (assets estáticos)
│   ├── manifest.json    (PWA config)
│   ├── icon.svg         (logo)
│   └── sw.js            (service worker)
├── src/
│   ├── main.jsx         (React entry)
│   └── london-countdown.jsx (componente)
├── dist/                (GENERADO por build)
├── index.html           (entry point)
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## ✨ Features

- ✅ 220 días de datos
- ✅ 52 misiones semanales
- ✅ Funciona sin internet (PWA)
- ✅ Recuerda progreso (localStorage)
- ✅ Instalable en home screen
- ✅ Optimizado para iPhone

---

## ❓ Troubleshooting

**Si Vercel te pide seleccionar Framework:**
- Framework Preset: **Vite**
- Build Command: **npm run build**
- Output Directory: **dist**

**Si no se ve bien en iPhone:**
1. Limpia cache: Settings → Safari → Clear History and Website Data
2. Abre de nuevo

**Si querés cambiar los días/misiones:**
- Edita `src/london-countdown.jsx`
- Haz push a GitHub
- Vercel redeploya automáticamente

---

**¿Necesitan ayuda?** Avisá.

🇦🇷 → 🇬🇧
