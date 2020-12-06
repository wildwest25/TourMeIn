# tourmein

## Project setup

```
npm install

sudo npm install // radilo na mac-u
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Naziv aplikacije:
TourMeIn

Fakultet informatike u Puli:
https://fipu.unipu.hr/

Kolegij:
Programsko inženjerstvo --> https://www.notion.so/Programsko-in-enjerstvo-e353945331df468e8382cdad1e91c4b8

Mentori:
doc.dr.sc Nikola Tanković (https://www.notion.so/Kontakt-stranica-875574d1b92248b1a8e90dae52cd29a9)
Toni Starčić, univ. bacc.inf

Opis funkcionalnosti:

*************************************************************************************
Aplikacija je zamišljena kao svojevrsni "Uber za turističke vodiče".

Želimo otići npr. sami ili sa obitelji u neki poznati turistički grad/odredište, ali pritom idemo vlastitim aranžmanom bez ikakvih organiziranih "tura" razgledavanja od strane turističke agencije - tu će Vam pomoći naša aplikacija.

Aplikacija na svom početnom zaslonu nudi registraciju korisnika ili kao "VODIČ" ili kao "KORISNIK", odnosno odvojeni sustav registracije gdje oni koji žele turistima ponuditi svoje vodstvo u razgledavanju lokacije i njenih znamenitosti se registriraju kao vodiči, a oni koji žele nešto razgledavati ali im je za to potrebno stručno vodstvo se registriraju kao korisnici.

Osnovne zamisli i funkcionalnosti naše aplikacije:

- početno sučelje (login screen) sa odvojenim opcijama registracije za vodiča i za korisnika

- različit izgled početnog sučelja nakon obavljenog logina za korisnika i različit za vodiča (korisniku se izlistavaju vodiči u blizini - preko GPS lokacije, dok se vodiču izlistava njegov profil ili zahtjevi korisnika...)

- mogućnost naknadnog uređivanja profila korisnika i vodiča nakon obavljene registracije (dodavanje nekih pojedinosti koje se neće tražiti prilikom registracije)

- omogućavanje pretrage vodiča od strane korisnika i sortiranje prema raznim kriterijima (cijena, ocjena, jezici, znamenitosti koje nudi za razgledavanje...)

- onemogućavanje pretrage korisnika (koji nisu vodiči) od strane drugih običnih korisnika ili od strane vodiča (samo vodič kojeg je pojedini korisnik zatražio za razgledavanje i stupio u kontakt s njim može vidjeti profil tog korisnika)

- notification sustav na strani vodiča i korisnika (korisnik zatraži vodiča za razgledavanje, vodiču dolazi notification na koji odgovara sa DA/NE i potom povratna informacija dolazi korisniku)

- jednostavni chat/message sustav između vodiča i korisnika

- ocjenjivanje vodiča od strane korisnika (nakon uspješnog razgledavanja) i onemogućavanje zahtjeva za sljedećim vodičem unutar aplikacije bez ocjenjivanja (ocjenom 1 do 5) prethodnog vodiča

- korištenje trenutne GPS lokacije uređaja s kojeg je obavljen login korisnika kako bi se mogli izlistati svi vodiči u blizini, te kako bi tako lakše i bolje prilagodili početno korisničko sučelje korisnika (sa listom vodiča u krugu od 50km npr) 
*************************************************************************************

Javni prototip: 
https://www.figma.com/file/TeQDllmlnUq8YmIiAjedUi/TourMeIn-prototip?node-id=0%3A1

Planirana zaduženja po članu tima: 

Luka Đurašinović:
- osmišljavanje izgleda i funkcionalnosti aplikacije
- komuniciranje sa profesorom
- vođenje računa o rokovima za pojedine zadatke unutar aplikacije
- upload svih potrebnih datoteka na Slack
- izrada UML Use Case i UML Class dijagrama
- pomoć i zadavanje napomena/natuknica pri izradi prototipa na Figmi
- dogovaranje s kolegama oko raspodjele zadataka pri izradi projekta
- izrada 1/3 stranica/dijelova naše aplikacije (npr. početna stranica, stranica registracije, profilna stranica vodiča/korisnika...)  
  
Matija Hamer:  
- dodatak ideja vezanih uz aplikaciju  
- prijedlog korištenja Trella, te prebacivanje ideja u kartice  
- nalazak i izrada komponenti potrebnih za prototip na Figmi  
- izrada 1/3 stranica/dijelova naše aplikacije i provjera funkcionalnosti  
- povezivanje back-end dijela aplikacije na Firebase-u  

Josip Plejić:
- dodavanje ideja vezanih uz aplikaciju
- izrada logo-a
- Poboljšanje cijelokupog izgleda svake pojedine stranice
- izrada 1/3 stranica/dijelova naše aplikacije izrada css koda u skladu sa prototipom
