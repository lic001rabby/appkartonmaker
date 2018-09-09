<template>

<el-container>
  <!--header start -->
  <el-header class="no-right-padding">
    <el-row type="flex" class="row-bg" justify="space-between"  >
      <el-col :xs="24" :lg="11"></el-col>
      <el-col :xs="24" :lg="11" class="align-right"><el-button>Reset</el-button><el-button type="primary">Mascarello's History</el-button>
      </el-col>
    </el-row>
    <div class="margin-20"></div>
    <el-row class="row-bg" justify="space-around">
      <el-col :xs="24" :lg="11">
        <type-selector></type-selector>
      </el-col>
      <el-col :xs="24" :lg="10" class="">
      <range-slider ></range-slider>
      </el-col>
    </el-row>
  </el-header>
  <!-- header end -->

  <!-- Main content start -->
  <el-main>
    <red-zone :red_wines=red_wines></red-zone>
  </el-main>
  <!-- Main content end -->
</el-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RangeSlider from '@/components/RangeSlider.vue'
import TypeSelector from '@/components/TypeSelector.vue'
import RedZone from '@/components/RedZone.vue'

export default {
  name: 'home',
  data() {
    return {
      
      red_wines:{
  "1r": {
    "type": "red",
    "name": "BAROLO D.O.C.G.",
    "year": 2014,
    "info1": "König der Weine",
    "info2": "3 Jahre in Eichenfässern",
    "info3": "Berühmeste Rotwein",
    "price": 38,
    "image": "",
    "": ""
  },
  "2r": {
    "type": "red",
    "name": "BARBARESCO DOCG",
    "year": 2015,
    "info1": "Kleiner Brüder des Barolo",
    "info2": "100% Nebbiolotrauben",
    "info3": "Intensiz: Lakriz, Blumen",
    "price": 36,
    "image": "",
    "": ""
  },
  "3r": {
    "type": "red",
    "name": "NEBBIOLO D'ALBA D.O.C.",
    "year": 2016,
    "info1": "Rubinrot intensiv",
    "info2": "15-18 Monate in Echtholz",
    "info3": "Harmonisch",
    "price": 15.5,
    "image": "",
    "": ""
  },
  "4r": {
    "type": "red",
    "name": "DAL 1927 NEBBIOLO D'ALBA D.O.C.",
    "year": 2014,
    "info1": "Elegant und Komplex",
    "info2": "Lakritz, Vanille",
    "info3": "18-24 Monate in Echtholz",
    "price": 27.5,
    "image": "",
    "": ""
  },
  "5r": {
    "type": "red",
    "name": "BRICCO DELLA DIAVOLA NEBBIOLO",
    "year": 2015,
    "info1": "15-24 Monate in Echtholz",
    "info2": "Rubinrot",
    "info3": "Harmonisch, Warm",
    "price": 20,
    "image": "",
    "": 15
  },
  "6r": {
    "type": "red",
    "name": "GIARDINO DEI BASTIONI NEBBIOLO",
    "year": 2015,
    "info1": "Etikett zeigt den Garten des Hauses Masc.",
    "info2": "Frucht und Blumen noten",
    "info3": "Rot, Vanille",
    "price": 27.5,
    "image": "",
    "": ""
  },
  "7r": {
    "type": "red",
    "name": "BARBERA D'ALBA D.O.C.",
    "year": 2016,
    "info1": "12-15 Monate in Echtholz",
    "info2": "Rubinrot, Violette",
    "info3": "Intensiv, Himbeeren, Pflaumen",
    "price": 11,
    "image": "",
    "": ""
  },
  "8r": {
    "type": "red",
    "name": "GRANDEUR BARBERA D'ALBA D.O.C.",
    "year": 2016,
    "info1": "Kirschen, Sandelholz",
    "info2": "Mineralisch",
    "info3": "15-24 Monate + 6 Monate in der Flasche",
    "price": 18,
    "image": "",
    "": ""
  },
  "9r": {
    "type": "red",
    "name": "DOLCETTO D'ALBA D.O.C.",
    "year": 2017,
    "info1": "Leuchtend Rubinrot",
    "info2": "Jüngste Wein",
    "info3": "Frisch, Himbeeren und Kirschen",
    "price": 11,
    "image": "",
    "": ""
  },
  "10r": {
    "type": "red",
    "name": "COLLEZIONE UMBERTO NEBBIOLO",
    "year": 2015,
    "info1": "Privat Kollektion von Umberto Mascarello",
    "info2": "Ultra Qualität",
    "info3": "Limited",
    "price": 27.5,
    "image": "",
    "": ""
  },
  "11r": {
    "type": "red",
    "name": "BARBERA DOC SUPERIORE",
    "year": 2015,
    "info1": "90 anniversary",
    "info2": "Limited edition",
    "info3": "Exclusive Rot",
    "price": 21,
    "image": "",
    "": ""
  },
  "12r": {
    "type": "red",
    "name": "LANGHE FREISA: FREI",
    "year": 2016,
    "info1": "Jung und Frisch",
    "info2": "Rot Angenehmen",
    "info3": "------> KANNST DU FREI SCHENKEN",
    "price": 14,
    "image": "",
    "": ""
  },
  "13r": {
    "type": "red",
    "name": "LANGHE ROSSO: FREI",
    "year": 2017,
    "info1": "Jung und Frisch",
    "info2": "Rot Angenehmen",
    "info3": "------> KANNST DU FREI SCHENKEN",
    "price": 9.7,
    "image": "",
    "": ""
  },
  "14r": {
    "type": "red",
    "name": "GRIGNOLINO DEL MONFERRATO D.O.C.",
    "year": 2017,
    "info1": "Jung und Frisch",
    "info2": "Rot Angenehmen",
    "info3": "",
    "price": 15,
    "image": "",
    "": ""
  },
  "15w": {
    "type": "white",
    "name": "ROERO ARNEIS D.O.C.G.",
    "year": 2017,
    "info1": "Frischen Obst und Zitrusfrüchten",
    "info2": "Fruchtigen Duftnoten",
    "info3": "Rund und Körperlich",
    "price": 13.9,
    "image": "",
    "": ""
  },
  "16w": {
    "type": "white",
    "name": "LANGHE CHARDONNAY D.O.C.",
    "year": 2017,
    "info1": "Satter strohgelber Farbe",
    "info2": "Bananen und tropischen Früchten",
    "info3": "Kräftig und frisch",
    "price": 11.7,
    "image": "",
    "": ""
  },
  "17w": {
    "type": "white",
    "name": "CHARBÀ CHARDONNAY D.O.C.",
    "year": 2016,
    "info1": "Name von: CHARdonnay - BArrique",
    "info2": "100% Chardonnaytrauben",
    "info3": "Holz, Ananas, Vanille",
    "price": 23,
    "image": "",
    "": ""
  },
  "18w": {
    "type": "white",
    "name": "GAVI D.O.C.G.",
    "year": 2017,
    "info1": "Korperlich und Rund",
    "info2": "Leicht Gelb",
    "info3": "Peach, Kamomille und acidic",
    "price": 18,
    "image": "",
    "": ""
  },
  "19w": {
    "type": "white",
    "name": "PRIMULA LANGHE BIANCO D.O.C.",
    "year": 2017,
    "info1": "",
    "info2": "",
    "info3": "",
    "price": 11,
    "image": "",
    "": ""
  },
  "20ro": {
    "type": "rose",
    "name": "ROSEMONTEU VINO ROSATO",
    "year": "",
    "info1": "Rote Trauben aber Rose Wein",
    "info2": "Perfekt für Aperitif",
    "info3": "Peach, Blueberry",
    "price": 11,
    "image": "",
    "": ""
  },
  "21b": {
    "type": "bubbles",
    "name": "SPUMANTE METODO CLASSICO V.S.Q",
    "year": "",
    "info1": "Chardonnay + Pinot Noir",
    "info2": "Elegant, feine Perlage",
    "info3": "Brotkrusten und Hefe",
    "price": 19.5,
    "image": "",
    "": ""
  },
  "22b": {
    "type": "bubbles",
    "name": "SPUMANTE CLASSICO EXTRA-BRUT",
    "year": "",
    "info1": "",
    "info2": "",
    "info3": "",
    "price": 19.5,
    "image": "",
    "": ""
  },
  "23b": {
    "type": "bubbles",
    "name": "SPUMANTE BRUT CLASSIC BARRICATO",
    "year": "",
    "info1": "",
    "info2": "",
    "info3": "",
    "price": 19.5,
    "image": "",
    "": ""
  },
  "24b": {
    "type": "bubbles",
    "name": "SPUMANTE 1927 BLANC DE BLANCS",
    "year": "",
    "info1": "Perfekt für Aperitiv",
    "info2": "24/30 Monate aging",
    "info3": "Intensiv und elegant",
    "price": 21.6,
    "image": "",
    "": ""
  },
  "25s": {
    "type": "sweet",
    "name": "BAROLO CHINATO",
    "year": "",
    "info1": "Seit 70 Jahre produziert",
    "info2": "Rezepte ist ein Geheimnis",
    "info3": "Rhabarber, Orangen, Zimt",
    "price": 32.9,
    "image": "",
    "": ""
  },
  "26s": {
    "type": "sweet",
    "name": "MOSCATO D'ASTI D.O.C.G.",
    "year": 2017,
    "info1": "Super Berühmt",
    "info2": "Süß und balanziert",
    "info3": "Brillantes Strohgelb",
    "price": 16.5,
    "image": "",
    "": ""
  },
  "27s": {
    "type": "sweet",
    "name": "REMIGINO Mosto",
    "year": "",
    "info1": "100% Brachetto Trauben",
    "info2": "Tief Rubinrot",
    "info3": "Mazeration bei niedriger Temperatur",
    "price": 17.5,
    "image": "",
    "": ""
  }
}
    }
  },
  components: {
    HelloWorld,
    RangeSlider,
    TypeSelector,
    RedZone
  }
}
</script>
