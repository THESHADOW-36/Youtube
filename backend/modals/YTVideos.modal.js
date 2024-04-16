import mongoose, { Schema } from "mongoose";

const YTVideos = new Schema({
   title: {
      type: String,
      required: [true, 'Please enter the title'],
      trim: true
   },
   channelName: {
      type: String,
      required: [true, 'Please enter the channelName'],
      trim: true
   },
   thumbnail: {
      type: String,
      required: [true, 'Please enter the thumbnail'],
      trim: true
   },
   likes: {
      type: String,
      required: [true, 'Please enter the likes'],
      trim: true
   },
   views: {
      type: String,
      required: [true, 'Please enter the views'],
      trim: true
   },
   description: {
      type: String,
      required: [true, 'Please enter the description'],
      trim: true
   },
   tag: {
      type: String,
      required: [true, 'Please enter the Tag'],
      trim: true
   },
   comments: {
      type: String,
      required: [true, 'Please enter the comments'],
      trim: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   updatedAt: {
      type: Date,
      default: Date.now
   },
   updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   }
})

export default mongoose.model("YTVideos", YTVideos);