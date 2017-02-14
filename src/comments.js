import faker from 'faker'

const commentGenerator = ( NUMBER_OF_COMMENTS ) => {
  let i, comments = [];
  for(i = 0 ; i < NUMBER_OF_COMMENTS; i++)
    comments.push(faker.lorem.sentence())
  return comments
}

export const TEN_COMMENTS = commentGenerator(10)
export const TWENTY_COMMETS = commentGenerator(20)
export const FIVE_COMMENTS = commentGenerator(5)
export const TWO_COMMENTS = commentGenerator(2)
