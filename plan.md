# Oussaminho — Creator Hub

## Scope
موقع شخصي خفيف وسريع كيجمع حضور Oussaminho فواجهة وحدة: Kick، Instagram، Discord وSpotify playlist، مع responsive layout خدام على الهاتف والتابلت والحاسوب.

## Design direction
- **Design Movement:** Streaming-night editorial؛ واجهة داكنة مستوحاة من غرف البث والـ live overlays ولكن منضبطة وماشي مزدحمة.
- **Core Principles:** وضوح فوري، contrast قوي، شخصية creator واضحة، وحركة خفيفة كتخدم الفهم.
- **Color Philosophy:** الخلفية شبه سوداء كتخلي المحتوى مركز، أخضر Kick المضيء هو signature color ديال النشاط والـ live، والبنفسجي البارد كيعطي عمق للـ ambient glow.
- **Layout Paradigm:** composition غير متماثلة: hero كبير فاليسار، social orbit وstatus panel فاليمين، ومن بعد cards مائلة شوية بدل شبكة مركزية جامدة.
- **Signature Elements:** live-status pill، خطوط grid دقيقة فالكواليس، وglow أخضر كيتجمع فالنقاط المهمة.
- **Interaction Philosophy:** كل click خاصو يحس مباشر وواضح؛ الأزرار كتبيّن target ديالها، وDiscord copy كيعطي feedback بلا تعقيد.
- **Animation:** entrance reveal متدرج، pulse خفيف غير فالـ live indicator، hover lift صغير، واحترام prefers-reduced-motion.
- **Typography System:** Tajawal عبر fallback system؛ headings كبار ومشدودين، labels uppercase/letter-spaced، ونصوص قصيرة ومريحة للقراءة.
- **Brand Essence:** مركز واحد للناس اللي باغين يتابعو Oussaminho فكل المنصات؛ الشخصية: مباشر، energetic، قريب.
- **Brand Voice:** CTA مباشر وودود، بحال “دخل للـ live” و“خليك قريب”. نتفادى العبارات العامة بحال “Welcome”.
- **Wordmark & Logo:** wordmark `O/` داخل مربع صغير بحال live badge، مع اسم Oussaminho بحروف قوية.
- **Signature Brand Color:** `#53FC18` أخضر neon خاص بالـ live presence.

## Implementation
- Static Node HTTP server على port 3000، بلا dependencies خارجية.
- `index.html` للهيكل والمحتوى، `styles.css` للتصميم responsive، و`script.js` للتفاعل (نسخ Discord، السنة، reveal).
- `public/manus-routes.json` كيعرف route `/` للمنصة.
- `app.config.ts` فيه `logoUrl` literal HTTPS.
- `package.json` فيه start script، و`Dockerfile` اختياري للنشر الحاوي إذا احتاجاتو المنصة.
