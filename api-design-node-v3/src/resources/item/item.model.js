import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   maxlength: 50
    // },
    // status: {
    //   type: String,
    //   required: true,
    //   enum: ['active', 'complete', 'pastdue'],
    //   default: 'active'
    // },
    note: String,
    due: Date,
    index: String
    // createdBy: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: 'user',
    //   required: true
    // }
    // list: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: 'list',
    //   required: true
    // }
  },
  { timestamps: true }
)

itemSchema.index({ /*list: 1*/ index: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)
