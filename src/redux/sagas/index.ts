
import { all, fork } from 'redux-saga/effects';
import cats from './cat';

export default function* root() {
  const sagas = [cats];
  yield all(sagas.map(fork));
}