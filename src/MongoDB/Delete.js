const getconnection = require('./mongodb');

const deleted = async () => {
  const db = await getconnection();
  const result = await db./*deleteOne*/ deleteMany(
    //     {
    //     stname: 'Samir',
    //     stcity: 'Anand',
    //     stcontact: 54646515414,
    //   }
    [
      {
        stname: 'Samir',
        stcity: 'Anand',
        stcontact: 54646515414,
      },
      { stname: 'Rudra', stcity: 'Anand', stcontact: 4651541451 },
    ]
  );
  if (result.acknowledged) {
    console.log('data deleted Sucessfully');
  }
};

deleted();
