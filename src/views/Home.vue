<template>

<el-container
>
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
        <type-selector @typeChange="updatePref"></type-selector>
      </el-col>
      <el-col :xs="24" :lg="10" class="align-right" :offset="1" >
      <range-slider :slider_value=defaults.slider_value></range-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="11">
       Red {{redstotal}} | White {{whitestotal}} | Sweet {{sweetstotal}} | | bubbles {{bubblestotal}}
      </el-col>
      
      <el-col :lg="11" style="text-align:right">
        <data-reader></data-reader>
        <el-button
        @click="newMix()"
        >New Mix</el-button>
      </el-col>
    </el-row>
  </el-header>
  <!-- header end -->

  <!-- Main content start -->
  <el-main v-loading="isLoading"
  element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <red-zone :red_wines="fulldataKarton" @update="dataUpdate"></red-zone>
  </el-main>
  <!-- Main content end -->
</el-container>

</template>

<script>
// @ is an alias to /src
import RangeSlider from '@/components/RangeSlider.vue'
import TypeSelector from '@/components/TypeSelector.vue'
import RedZone from '@/components/RedZone.vue'
import DataReader from '@/components/DataReader.vue'

export default {
  name: 'home',
  data() {
    return {
      isLoading : false,
      red_wines:[
  {
    "id": "1r",
    "type": "red",
    "name": "BAROLO D.O.C.G.",
    "year": 2014,
    "info1": "König der Weine",
    "info2": "3 Jahre in Eichenfässern",
    "info3": "Berühmeste Rotwein",
    "price": 38,
    "image": "",
    "": "",     "count": 0
  },
  {
    "id": "2r",
    "type": "red",
    "name": "BARBARESCO DOCG",
    "year": 2015,
    "info1": "Kleiner Brüder des Barolo",
    "info2": "100% Nebbiolotrauben",
    "info3": "Intensiz: Lakriz, Blumen",
    "price": 36,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "3r",
    "type": "red",
    "name": "NEBBIOLO D'ALBA D.O.C.",
    "year": 2016,
    "info1": "Rubinrot intensiv",
    "info2": "15-18 Monate in Echtholz",
    "info3": "Harmonisch",
    "price": 15.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "4r",
    "type": "red",
    "name": "DAL 1927 NEBBIOLO D'ALBA D.O.C.",
    "year": 2014,
    "info1": "Elegant und Komplex",
    "info2": "Lakritz, Vanille",
    "info3": "18-24 Monate in Echtholz",
    "price": 27.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "5r",
    "type": "red",
    "name": "BRICCO DELLA DIAVOLA NEBBIOLO",
    "year": 2015,
    "info1": "15-24 Monate in Echtholz",
    "info2": "Rubinrot",
    "info3": "Harmonisch, Warm",
    "price": 20,
    "image": "",
    "": 15,
    "count": 0
  },
  {
    "id": "6r",
    "type": "red",
    "name": "GIARDINO DEI BASTIONI NEBBIOLO",
    "year": 2015,
    "info1": "Etikett zeigt den Garten des Hauses Masc.",
    "info2": "Frucht und Blumen noten",
    "info3": "Rot, Vanille",
    "price": 27.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "7r",
    "type": "red",
    "name": "BARBERA D'ALBA D.O.C.",
    "year": 2016,
    "info1": "12-15 Monate in Echtholz",
    "info2": "Rubinrot, Violette",
    "info3": "Intensiv, Himbeeren, Pflaumen",
    "price": 11,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "8r",
    "type": "red",
    "name": "GRANDEUR BARBERA D'ALBA D.O.C.",
    "year": 2016,
    "info1": "Kirschen, Sandelholz",
    "info2": "Mineralisch",
    "info3": "15-24 Monate + 6 Monate in der Flasche",
    "price": 18,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "9r",
    "type": "red",
    "name": "DOLCETTO D'ALBA D.O.C.",
    "year": 2017,
    "info1": "Leuchtend Rubinrot",
    "info2": "Jüngste Wein",
    "info3": "Frisch, Himbeeren und Kirschen",
    "price": 11,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "10r",
    "type": "red",
    "name": "COLLEZIONE UMBERTO NEBBIOLO",
    "year": 2015,
    "info1": "Privat Kollektion von Umberto Mascarello",
    "info2": "Ultra Qualität",
    "info3": "Limited",
    "price": 27.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "11r",
    "type": "red",
    "name": "BARBERA DOC SUPERIORE",
    "year": 2015,
    "info1": "90 anniversary",
    "info2": "Limited edition",
    "info3": "Exclusive Rot",
    "price": 21,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "12r",
    "type": "red",
    "name": "LANGHE FREISA: FREI",
    "year": 2016,
    "info1": "Jung und Frisch",
    "info2": "Rot Angenehmen",
    "info3": "------> KANNST DU FREI SCHENKEN",
    "price": 14,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "13r",
    "type": "red",
    "name": "LANGHE ROSSO: FREI",
    "year": 2017,
    "info1": "Jung und Frisch",
    "info2": "Rot Angenehmen",
    "info3": "------> KANNST DU FREI SCHENKEN",
    "price": 9.7,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "14r",
    "type": "red",
    "name": "GRIGNOLINO DEL MONFERRATO D.O.C.",
    "year": 2017,
    "info1": "Jung und Frisch",
    "info2": "Rot Angenehmen",
    "info3": "",
    "price": 15,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "15w",
    "type": "white",
    "name": "ROERO ARNEIS D.O.C.G.",
    "year": 2017,
    "info1": "Frischen Obst und Zitrusfrüchten",
    "info2": "Fruchtigen Duftnoten",
    "info3": "Rund und Körperlich",
    "price": 13.9,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "16w",
    "type": "white",
    "name": "LANGHE CHARDONNAY D.O.C.",
    "year": 2017,
    "info1": "Satter strohgelber Farbe",
    "info2": "Bananen und tropischen Früchten",
    "info3": "Kräftig und frisch",
    "price": 11.7,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "17w",
    "type": "white",
    "name": "CHARBÀ CHARDONNAY D.O.C.",
    "year": 2016,
    "info1": "Name von: CHARdonnay - BArrique",
    "info2": "100% Chardonnaytrauben",
    "info3": "Holz, Ananas, Vanille",
    "price": 23,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "18w",
    "type": "white",
    "name": "GAVI D.O.C.G.",
    "year": 2017,
    "info1": "Korperlich und Rund",
    "info2": "Leicht Gelb",
    "info3": "Peach, Kamomille und acidic",
    "price": 18,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "19w",
    "type": "white",
    "name": "PRIMULA LANGHE BIANCO D.O.C.",
    "year": 2017,
    "info1": "",
    "info2": "",
    "info3": "",
    "price": 11,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "20ro",
    "type": "rose",
    "name": "ROSEMONTEU VINO ROSATO",
    "year": "",
    "info1": "Rote Trauben aber Rose Wein",
    "info2": "Perfekt für Aperitif",
    "info3": "Peach, Blueberry",
    "price": 11,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "21b",
    "type": "bubbles",
    "name": "SPUMANTE METODO CLASSICO V.S.Q",
    "year": "",
    "info1": "Chardonnay + Pinot Noir",
    "info2": "Elegant, feine Perlage",
    "info3": "Brotkrusten und Hefe",
    "price": 19.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "22b",
    "type": "bubbles",
    "name": "SPUMANTE CLASSICO EXTRA-BRUT",
    "year": "",
    "info1": "",
    "info2": "",
    "info3": "",
    "price": 19.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "23b",
    "type": "bubbles",
    "name": "SPUMANTE BRUT CLASSIC BARRICATO",
    "year": "",
    "info1": "",
    "info2": "",
    "info3": "",
    "price": 19.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "24b",
    "type": "bubbles",
    "name": "SPUMANTE 1927 BLANC DE BLANCS",
    "year": "",
    "info1": "Perfekt für Aperitiv",
    "info2": "24/30 Monate aging",
    "info3": "Intensiv und elegant",
    "price": 21.6,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "25s",
    "type": "sweet",
    "name": "BAROLO CHINATO",
    "year": "",
    "info1": "Seit 70 Jahre produziert",
    "info2": "Rezepte ist ein Geheimnis",
    "info3": "Rhabarber, Orangen, Zimt",
    "price": 32.9,
    "image": "",
    "": "",
    "count": 0
  },
  {
    "id": "26s",
    "type": "sweet",
    "name": "MOSCATO D'ASTI D.O.C.G.",
    "year": 2017,
    "info1": "Super Berühmt",
    "info2": "Süß und balanziert",
    "info3": "Brillantes Strohgelb",
    "price": 16.5,
    "image": "",
        "": "",     "count": 0
  },
  {
    "id": "27s",
    "type": "sweet",
    "name": "REMIGINO Mosto",
    "year": "",
    "info1": "100% Brachetto Trauben",
    "info2": "Tief Rubinrot",
    "info3": "Mazeration bei niedriger Temperatur",
    "price": 17.5,
    "image": "",
        "": "",     "count": 0
  }
]
        ,
      fulldataKarton: [],
      mixKarton: [],
      totalcount: 0,
      //test: RangeSlider.slider_value,
      pref: "red",
      lowpoint : 65,
      highpoint: 75,
      defaults: {
        pref: 'red',
        slider_value:[230, 430]
      },
      tester:'',
    }
  },
  methods: {
    updatePref (val) {
      if(val == "both"){
        this.lowpoint = 45;
        this.highpoint = 55;
      }
      else {
        this.lowpoint =65;
        this.highpoint =75;
        this.pref = val
      }
    },
    kartonCountUpdate(){
      this.mixKarton.forEach(element => {
        this.red_wines[element].count++;
        console.log('from KCU: ' +this.red_wines[element].count);
        
      });
      this.fulldataKarton = this.red_wines;
    },
    prefCount: function(pref) {
      let prefCount = 1;
      for(let i =0; i<this.mixKarton.length;i++){
        let index = this.mixKarton[i];
        if(this.red_wines[index].type==pref) {
          prefCount++;
          
        }
      }
      return prefCount;
    },
    generateRandom(range) {
      console.log('started in random');
      let random = Math.floor(Math.random()*range);
      console.log(random);
      return random;
    },
    totalPrice() {
      console.log('started total price')
      let total = 0;
      this.mixKarton.forEach(element => {
        total+=this.red_wines[element].price  
      });
      console.log(total)
      return total;
    },
    randomLimit(range){
      let difference = range[1] - range[0];
      let limiter = this.generateRandom(difference);
      return this.generateRandom(limiter);
    },
    checkPrice(range) {
      let result = 'default';
      //this.totalcount++
      //if(this.totalcount==100)throw new Error("Something went badly wrong!");
      console.log('started check price')
      let totalPrice = this.totalPrice();
      if (totalPrice<(range[0]+this.randomLimit(range))){
        result = 'low';
      }
      else if (totalPrice>range[1]) {
        result= 'high';
        console.log(this.mixKarton.pop())
      }
      else result= 'inrange'
      console.log(result);
      return result;
    },
    checkPref(pref) {
      this.totalcount++
      //if(this.totalcount==100)throw new Error("Something went badly wrong!");
      console.log('started in add to check pref')
      let prefCount = 1;
      for(let i =0; i<this.mixKarton.length;i++){
        let index = this.mixKarton[i];
        if(this.red_wines[index].type==pref) prefCount++;
      }
      let length = 1;
      if(this.mixKarton.length == 0) {length =1;}
      else {length = this.mixKarton.length;}
      let prefcent = ((prefCount*100)/length);
      console.log('prefcent= ' + prefcent);
      if(prefcent<this.lowpoint) {
        console.log('low')
        return 'low';
      }
      else if(prefcent>this.highpoint) {
        console.log('high')
        return 'high';
      }
      if (prefcent >=this.lowpoint && prefcent <=this.highpoint){ 
        console.log('okay')
        return 'okay';
      }    
    },

    addToMix(pref) {
      
      console.log('started addToMix');
      let index = this.generateRandom(this.red_wines.length);
      let indd =this.mixKarton.length;
      this.mixKarton[indd]=index;
      

      if(this.checkPref=='low'){
        
        if(this.red_wines[index].type==pref) {
          console.log('low addToMix');
          let i =this.mixKarton.length;
          this.mixKarton[i]=index;
        }
      }
      else if(this.checkPref == 'high') {
        
        if(this.red_wines[index].type!=pref) {
          let i =this.mixKarton.length;
          this.mixKarton[i]=index;
        }
      }
      else if(this.checkPref == 'okay') {
        
        let i =this.mixKarton.length;
        this.mixKarton[i]=index;
        }
      },
    
    mixControler(pref, range) {

      console.log('started');
      this.isLoading = true;
      console.log(this.mixKarton)
      while(this.checkPrice(range)!='inrange'){
        console.log('started main loop');
        this.addToMix(pref);
      }
      if(this.checkPref(pref)=='okay'){
        this.kartonCountUpdate();
        console.log('done!');
        this.isLoading = false;


        console.log(this.mixKarton);
        
      }
      else {
        console.log('!shit!')
        let prefcent = this.checkPref(pref);
        if (prefcent=='high') this.adjustPrefcentHigh(prefcent, pref);
        if (prefcent=='low') this.adjustPrefcentLow(prefcent, pref);
        this.mixControler(pref, range);
      }

    },
    adjustPrefcentHigh(prefcent, pref){
      let localMix = this.mixKarton
      for(let i =0; i<localMix.length;i++){
        let index = localMix[i];
        if(this.red_wines[index].type==pref) {
          localMix.splice(i,1);
        }
      }
      
    },
    adjustPrefcentLow(prefcent, pref){
      let localMix = this.mixKarton
      for(let i =0; i<localMix.length;i++){
        let index = localMix[i];
        if(this.red_wines[index].type!=pref) {
          localMix.splice(i,1);
        }
      }
      
    },
    newMix: function(){
      this.mixKarton=[];
      this.fulldataKarton=[];
      this.red_wines.forEach(element =>{
        element.count=0;
      })
      this.mixControler(this.pref, this.$store.getters.slider);
    },
    dataUpdate(newset){
      this.fulldataKarton = newset;
      console.log("dataUpdated");
      console.log(newset);
      /*for(var i=0; i<this.red_wines.length; i++){
        this.fulldataKarton[i]=(newset[i]);
      }*/
      

    }
    
  },
  watch: {
    fulldataKarton:{
      handler: function(val){
        console.log('changed');
        console.log(val);
        this.$store.commit("kartonupdate", val)
      },
      deep: true
    }
  },
  mounted(){
  this.mixControler('white', [230, 430])
  },

  computed: {
    redstotal:  function(){
      
      let count=0;
      this.red_wines.forEach(element => {
        
        if(element.type=="red"){
          count+=element.count;
          console.log(element.count)
        }
      });
      console.log(count);
      return count;
      
    
    },
    whitestotal:  function(){
      
      let count=0;
      this.red_wines.forEach(element => {
        
        if(element.type=="white"){
          count+=element.count;
          console.log(element.count)
        }
      });
      console.log(count);
      return count;
    },
    sweetstotal:  function(){
      
      let count=0;
      this.red_wines.forEach(element => {
        
        if(element.type=="sweet"){
          count+=element.count;
          console.log(element.count)
        }
      });
      console.log(count);
      return count;
    },
    bubblestotal:  function(){
      
      let count=0;
      this.red_wines.forEach(element => {
        
        if(element.type=="bubbles"){
          count+=element.count;
          console.log(element.count)
        }
      });
      console.log(count);
      return count;
    }
  },
  components: {
    RangeSlider,
    TypeSelector,
    RedZone,
    DataReader
  }
}
</script>
<style>
#reddot {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #CD112A;
}
</style>

