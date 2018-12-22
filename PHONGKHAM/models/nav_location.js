const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    startPoint  : {
        type: Schema.Types.ObjectId,
        ref : 'location',
        unique: true
    },
    endPoint    : [
        {
            id: {
                type: Schema.Types.ObjectId,
                ref : 'location'
            },
            distance: Number,
            description: String
        }
    ],
});
const NavLocationModel = mongoose.model('nav_location', locationSchema);

class NavLocation extends NavLocationModel {
    static insert(startPoint, endPointID, endPointDistance, endPointDescription) {
        // VIET PROMISE
        return new Promise(async resolve => {
            try {
                let checkExistStartPoint = await NavLocation.findOne({ startPoint: startPoint });
                if (!checkExistStartPoint) {
                    let initNavLocation = new NavLocation({ 
                        startPoint: startPoint, 
                        endPoint: {
                            id: endPointID,
                            distance: endPointDistance,
                            description: endPointDescription
                        }
                    });
                    let saveNavLocation = await initNavLocation.save();
                    if (!saveNavLocation) return resolve({ error: true, message: 'cannot_save_data' });
                    return resolve({ error: false, data: saveNavLocation });
                } else {
                    let updateNavAndPushEndPoint = await NavLocation.findOneAndUpdate({
                        startPoint: startPoint
                    }, { 
                        $addToSet: {
                            endPoint: {
                                id: endPointID,
                                distance: endPointDistance,
                                description: endPointDescription
                            }
                        }
                     }, { new: true });
                    if (!updateNavAndPushEndPoint) return resolve({ error: true, message: 'cannot_update_data' });
                    return resolve({ error: false, data: updateNavAndPushEndPoint });
                }
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }

    static getList() {
        return new Promise(async resolve => {
            try {
                let listNavLocation = await NavLocation.find({}).populate('startPoint').populate('endPoint');
                if (!listNavLocation) return resolve({ error: true, message: 'cannot_get_list' });
                return resolve({ error: false, data: listNavLocation });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
        });
    }
}

module.exports = NavLocation;
