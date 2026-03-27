# London Countdown 🇬🇧

App web progresiva (PWA) con 220 días hacia Londres + 52 misiones secretas.

Instalable en iPhone como app nativa.

## 🚀 Deploy a Vercel (RECOMENDADO)

### Opción más fácil: GitHub + Vercel Auto-Deploy

#### 1. **Crear un repo en GitHub**
```bash
git init
git add .
git commit -m "London Countdown PWA"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/london-countdown.git
git push -u origin main
```

#### 2. **Conectar a Vercel**
- Ve a https://vercel.com/new
- Haz click en "Import Git Repository"
- Pega: `https://github.com/TU_USUARIO/london-countdown.git`
- Click "Continue"
- Vercel auto-detecta Vite, click "Deploy"

**¡Listo!** Te da un link como `https://london-countdown.vercel.app`

Cada push a GitHub se redeploya automáticamente.

---

## 📱 Instalar en iPhone

1. Abre el link en **Safari**
2. Toca **⬆️** (compartir, abajo a la derecha)
3. Scrollea y toca **"Agregar a Inicio"**
4. Click **"Agregar"**
5. **¡APP instalada en home!**

---

## 🛠️ Desarrollo Local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

---

## Tech Stack

- React 18
- Vite (⚡ ultra rápido)
- Service Worker (funciona sin internet)
- localStorage (recuerda progreso)

## Características

✅ 220 días de datos personalizados  
✅ 52 misiones semanales  
✅ Offline-first  
✅ PWA instalable  
✅ Optimizado para iPhone 15 Pro  
✅ Acento rojo UK  

