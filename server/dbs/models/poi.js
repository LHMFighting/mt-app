import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Poi = new Schema({
  name: {
    type: String//景点名
  },
  province: { // 省份名
    type: String
  },
  city:{
    type:String
  },
  county:{
    type:String
  },
  areaCode:{
    type:String
  },
  tel:{
    type:String
  },
  area:{
    type:String
  },
  add:{
    type:String
  },
  type:{
    type:String
  },
  module:{
    type:String
  },
  longtide:{ // 经度
    type:Number
  },
  // longitude:{ // 经度
  //   type:Number
  // },
  latitude:{  // 纬度
    type:Number
  }
})

export default mongoose.model('Poi', Poi)
