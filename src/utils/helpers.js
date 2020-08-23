import moment from 'moment';

export const getMuscleName = (muscleID) => {
  switch (muscleID) {
    case 1:
      return 'Abdominis';
    case 2:
      return 'Hamstring';
    case 3:
      return 'Chest';
    case 4:
      return 'Hamstring';
    case 5:
      return 'Triceps';
    case 6:
      return 'Biceps';
  }
};

export const sortByDate = (props) => {
  let component_proto = {};
  component_proto.props = Object.assign({}, props);

  component_proto.getTimes = function () {
    const callItemsObject = this.props.items.reduce((acc, item) => {

      let key = moment(item.createdAt).format('DD-MM-YYYY'),
        payload = {
          _id: item._id,
          muscleID:item.muscleID,
          userID:item.userID,
          sets:item.sets,
          reps:item.reps,
          exerciseName:item.exerciseName,
          notes:item.notes
        };

      acc[key] ? acc[key].push(payload) : (acc[key] = [payload]);

      return acc;
    }, {});
    return callItemsObject;
  };

  return component_proto;
};
