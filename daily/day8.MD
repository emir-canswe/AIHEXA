----React---

--facebook tarafindan geliştirilen bir js kutuphanesidir.

--2013 cikti

--en populer fronted kutuphanesi

--interrnetin %40 react kullanilr

--React ile :

--component bazli geliştirme

--otomatik dom guncelle

--hizli ve guvenli


--DOM
--Tarayıcı bunu DOM'da şu şekilde oluşturur:

Document
│
└── html
├── head
│   └── title
│       └── "DOM Örneği"
│
└── body
├── h1
│   └── "Merhaba"
├── p
│   └── "İlk paragraf"
└── button
└── "Tıkla"

bu sekdile sitenin agac yapsini temsil eder


--Component nedir

--reactin en onemli kavramidir

--component:yeniden kullanilabir parca

--ornek:

navbar:component

button:component

card:component

footer:component


--bunlarin her biri ayri ayti yapilir sonrada da lego gibi birbirine baglanir

// Basit Component
function Navbar() {
return (
<nav>
<h1>Emir Can</h1>
</nav>
);
}

// Kullanımı
function App() {
return (
<div>
<Navbar />  ← Component burada!
</div>
);
}



---JSX

--javaScrip+HTML birlikte

--JSX ile:

--<div>Merhaba!</div>

--Daha kolay ve okunabilir! 

// JSX Örneği
function Kart() {
const isim = "Emir Can";
const yas = 22;

    return (
        <div>
            <h2>{isim}</h2>      ← JS değişkeni!
            <p>Yaş: {yas}</p>   ← JS değişkeni!
            <p>{2 + 2}</p>      ← JS işlemi!
        </div>
    );
}


--Props nedir

--props:componete disaridan veri gonderme işlemini gerceklestiri

--fonkiyon paramatresi gibi dusun

--// Props alan component
function Kart(props) {
return (
<div>
<h2>{props.isim}</h2>
<p>{props.yas}</p>
</div>
);
}

// Props gönderme
function App() {
return (
<div>
<Kart isim="Emir" yas={22} />
<Kart isim="Ayşe" yas={25} />
<Kart isim="Mehmet" yas={28} />
</div>
);
}


--stage nedir
State = Component'in kendi verisi!

Değişince component otomatik güncellenir!

