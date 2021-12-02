<template>
    <div class="LabelSelect">
        <div class="singleSelectContainer" v-for="(value,index) in type" :key='index'>
            <div class="singleLabel" :style="{color:colorArr[index]}">
                    <span>{{type[index]}}</span>
                </div>
            <div class="singleCheckBoxContanier">
                <a-checkbox v-model="checkArr[index]"></a-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            checkArr:[],
            color:'red',
        }
    },
    computed:{
        ...mapState({type:'type',colorArr:'colorArr'}),
    },
    created(){
        console.log(this.colorArr);
        this.type.forEach((value,index)=>{
            this.checkArr.push(true);
        });
    }
}
</script>

<style>
.LabelSelect{
    width: 15vw;
    /* height: 20vh; */
    /* background-color: black; */
    box-shadow: 0 0 1vw aqua;
}
.singleSelectContainer{
    width:15vw;
    height: 3vh;
    /* background-color: blue; */
    display: flex;
}
.singleLabel{
    width: 13vw;
    height: 3vh;
    /* color: white; */
    /* background: cadetblue; */
    font-size: 2vh;
    font-weight: bolder;
}
.singleLabel span{
    margin-left: 4vh;
}
.singleCheckBoxContanier{
    display: flex;
}
</style>