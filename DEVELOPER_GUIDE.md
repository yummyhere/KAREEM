# Kareem's Soft Drinks — Asaan Project Guide

Yeh guide website ke owner, content editor, ya kisi naye developer ke liye hai. Technical alfaaz ka matlab saath hi samjhaya gaya hai. Code samajhna zaroori nahi; guide batati hai ke website kahan se chalti hai aur aam tabdeeliyan kahan hoti hain.

## 1. Yeh project kya karta hai?

Yeh Kareem's Soft Drinks ki website hai. Is mein drinks ka intro, menu, brand ki kahani, customer reviews, location, cart, search, aur WhatsApp par order bhejne ke controls hain.

Website browser mein chalti hai. **Abhi is project mein alag database ya server par save hone wala order system nahi hai.** Cart page refresh hone par dobara initial state se shuru hota hai. Order bhejne ka button WhatsApp mein tayyar message kholta hai; business WhatsApp par order ki tasdeeq karta hai.

Newsletter form filhaal email ko kisi mailing list par bhejta ya kahin save nahi karta. Form submit karne par sirf website par confirmation nazar aata hai.

## 2. Website apne computer par kaise dekhein

### Pehli dafa

1. Computer par **Node.js** install karein. Yeh website chalane ke liye zaroori helper program hai.
2. Is project ka folder kholein: `kareem soft drinks`.
3. Folder ke andar terminal/PowerShell kholein.
4. Yeh command chalayein:

   ```powershell
   npm install
   ```

   Is se project ko chalane ke liye zaroori packages install honge. Agar install ke dauran error aaye, error message developer ko bhejein.

### Har dafa website chalane ke liye

1. Project folder mein terminal/PowerShell kholein.
2. Yeh command chalayein:

   ```powershell
   npm run dev
   ```

3. Browser mein [http://localhost:3000](http://localhost:3000) kholein.
4. Website band karne ke liye usi terminal mein `Ctrl+C` dabayein.

`localhost` ka matlab hai website sirf aapke apne computer par chal rahi hai; yeh command website ko public internet par publish nahi karti.

## 3. Project ke aham folders aur files

| Jagah | Asaan matlab |
|---|---|
| `src/App.tsx` | Website ke tamam sections ko ek page par jorta hai. |
| `src/components/` | Website ke alag alag hisson ki files: hero, menu, footer, cart, waghera. |
| `src/data/beverages.ts` | Drinks ke naam, prices, descriptions, categories, hero slides, aur customer reviews ka data. |
| `src/assets/images/` | Source project ke image assets. |
| `public/assets/drinks/` | Website par dikhne wali drink product images. |
| `src/index.css` | Website ki animations aur additional styling. |
| `src/utils/order.ts` | Cart ka total aur WhatsApp order message banane ke helpers. |
| `package.json` | Project chalane, check karne, aur build banane ki commands. |

`src` ka matlab source files hain—yaani woh files jin se website tayyar hoti hai. `public` mein rakhi images browser ko seedhe dikhayi ja sakti hain.

## 4. Aam tabdeeliyan kahan karein

### Drink ka naam, price, ya description badalna

`src/data/beverages.ts` mein `PRODUCTS` list dhoondein. Har drink ka apna naam, category, price, description, aur image ka rasta hota hai. Sirf sahi drink ki maloomat badlein.

**Price badalte waqt:** cart aur WhatsApp order message dono isi product price ka istemal karte hain.

### Hero ke rotating slides badalna

Hero page ke sab se upar wala bara section hai. Is ke drinks aur unka text `src/data/beverages.ts` ki `HERO_SLIDES` list mein hain. Slides har 3 seconds baad khud badalte hain; unka timing component `src/components/HeroSlider.tsx` mein hai. Timing badalni ho to developer se kahen.

Hero ki floating decorative cheezein `src/components/HeroSlider.tsx` mein choose hoti hain aur unki illustration `src/components/Decorations.tsx` mein hai.

### Product image badalna

1. Nayi image `public/assets/drinks/` mein rakhein.
2. `src/data/beverages.ts` mein us drink ke `image` ka rasta update karein.
3. Browser mein check karein ke image sahi load ho rahi hai.

Image ka naam aur file ka rasta bilkul milna chahiye. Purani image ko hatane se pehle check karein ke koi aur drink ya section usay use to nahi kar raha.

### Customer details, address, ya WhatsApp number badalna

Yeh maloomat `src/data/beverages.ts` mein `CLIENT_INFO` ke andar hoti hai. WhatsApp number badalne ke baad test order khol kar zaroor check karein ke sahi number par ja raha hai.

## 5. Changes check karne ke commands

Website type/code errors ke liye:

```powershell
npm run lint
```

Publish karne layak website build banane ke liye:

```powershell
npm run build
```

Build ki files `dist` folder mein banti hain. Build banana website ko internet par publish karna nahi hai; publish karne ke liye hosting service ki zaroorat hoti hai.

## 6. Aam mushkilaat

**`npm` pehchaan nahi raha:** Node.js install nahi hua, ya terminal band karke dobara kholna baqi hai.

**`localhost:3000` nahi khul raha:** Pehle `npm run dev` chalayein aur terminal mein aane wala error parhein. Agar port pehle se use ho raha ho to developer se madad lein.

**Image nahi dikh rahi:** File ka naam, extension (`.png`, `.jpg`), aur code mein diya hua image path match karein.

**`npm install` dependency error de raha hai:** Error message developer ko bhejein. Package versions ko bina developer ke mashware ke update na karein.

## 7. Zaroori baat

Text, prices, ya images update karne ke baad browser mein har relevant section check karein. Code ya package versions samajh na aayein to us file mein andazay se tabdeeli karne ke bajaye developer se poochhein.
