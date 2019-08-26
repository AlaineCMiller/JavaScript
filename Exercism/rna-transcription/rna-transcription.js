export const toRna = (sequence) => sequence.replace(/G|C|T|A/g, (value)=> transcription[value])


const transcription = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}
