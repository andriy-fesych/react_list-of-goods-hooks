import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { ButtonGenerator } from './components/ButtonGenerator';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type Props = {};

const App: React.FC<Props> = () => {
  const [goodsList, setGoodsList] = useState([...goodsFromServer]);
  const [visibility, setVisibility] = useState(false);
  const [lengthLimit, setLengthLimit] = useState(1);

  const visibilitySwitch = () => {
    setVisibility(prevVis => !prevVis);
  };

  const reverseList = () => {
    setGoodsList(prevList => [...prevList].reverse());
  };

  const sortAlphabetically = () => {
    setGoodsList(prevList => [...prevList].sort(
      (good1, good2) => good1.localeCompare(good2),
    ));
  };

  const resetList = () => {
    setGoodsList([...goodsFromServer]);
    setLengthLimit(1);
  };

  const sortbyLength = () => {
    setGoodsList(prevList => [...prevList].sort(
      (good1, good2) => good1.length - good2.length,
    ));
  };

  const changeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLengthLimit(+event.target.value);
    setGoodsList([...goodsFromServer]
      .filter(good => good.length >= +event.target.value));
  };

  return (
    <div className="App has-text-centered">
      <br />
      <h1 className="title is-1">Goods list sorting</h1>
      {!visibility
        && <ButtonGenerator name="Start" method={visibilitySwitch} />}
      {visibility
      && (
        <>
          <ButtonGenerator name="Reverse" method={reverseList} />
          <ButtonGenerator
            name="Sort alphabetically"
            method={sortAlphabetically}
          />
          <ButtonGenerator name="Reset" method={resetList} />
          <ButtonGenerator name="Sort by length" method={sortbyLength} />
          <div className="select is-rounded is-success is-light is-outlined">
            <select
              value={lengthLimit}
              onChange={changeLimit}
            >
              {Array(10).fill('option').map((item, index) => (
                <option key={`${item}${index + 1}`} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>
          <GoodsList goods={goodsList} />
        </>
      )}
    </div>
  );
};

export default App;
