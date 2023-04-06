const getconnection = require('./mongodb');

const insert = async () => {
  const db = await getconnection();
  //   const result = await db.insertOne({
  //     stname: 'Darshan',
  //     stcity: 'khambhat',
  //     stphone: 87456416511,
  //   });
  const result = await db.insertMany([
    // {
    //   stname: 'Jigar',
    //   stcity: 'Jitodia',
    //   stcontact: 564646164164,
    // },
    // { stname: 'Meet', stcity: 'Anand', stcontact: 878465468451 },
    // { stname: 'Darshan', stcity: 'khambhat', stcontact: 65416541654 },

    { stname: 'Rudra', stcity: 'Anand', stphone: 456651564 },
    { stname: 'pruthu', stcity: 'Bakrol', stphone: 45684864186 },
  ]);
  if (result.acknowledged) {
    console.log('data inserted Sucessfully');
  }
};
insert();
