import faker from 'faker'

const comments = ( NUMBER_OF_COMMENTS ) => {
  let i, comments = [];
  for(i = 0 ; i < NUMBER_OF_COMMENTS; i++)
    comments.push(faker.lorem.sentence)
  return comments
}

export const TEN_COMMENTS = comments(10)
export const TWENTY_COMMETS = comments(20)
export const FIVE_COMMENTS = comments(5)
export const TWO_COMMENTS = comments(2)
