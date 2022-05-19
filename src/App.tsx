import React, { useEffect } from 'react';

import './App.css';
import { difference, orderBy } from 'lodash';
import { compareLocale } from './helpers/compareLocale';
import { sortDirectionDecorator } from './helpers/sortDirectionDecorator';

const characters = [
  { name: 'Luke Skywalker' },
  { name: 'C-3PO' },
  { name: 'R2-D2' },
  { name: 'Darth Vader' },
  { name: 'Leia Organa' },
  { name: 'Owen Lars' },
  { name: 'Beru Whitesun lars' },
  { name: 'R5-D4' },
  { name: 'Biggs Darklighter' },
  { name: 'Obi-Wan Kenobi' },
  { name: 'Anakin Skywalker' },
  { name: 'Wilhuff Tarkin' },
  { name: 'Chewbacca' },
  { name: 'Han Solo' },
  { name: 'Greedo' },
  { name: 'Jabba Desilijic Tiure' },
  { name: 'Wedge Antilles' },
  { name: 'Jek Tono Porkins' },
];

function App() {
  const [arrayIndex, setArrayIndex] = React.useState([] as { name: string }[]);
  const [arrayIndex2, setArrayIndex2] = React.useState([] as { name: string }[]);
  const [arrayIndex3, setArrayIndex3] = React.useState([] as { name: string }[]);

  useEffect(() => {
    setArrayIndex([]);
    setArrayIndex2([]);
    setArrayIndex3([]);
  }, []);

  return (
    <div style={{ display: 'flex', marginLeft: 5 }}>
      <div style={{ marginLeft: 15 }}>
        <h1>List with unique keys</h1>
        <button
          disabled={arrayIndex.length === characters.length}
          onClick={() => setArrayIndex(prev => [...prev, difference(characters, prev)[0]])}
        >
          Load more
        </button>
        <button onClick={() => setArrayIndex(prev => orderBy(prev, 'name', ['asc']))}>Asc</button>
        <button onClick={() => setArrayIndex(prev => orderBy(prev, 'name', ['desc']))}>Desc</button>
        <ul style={{ padding: 0 }}>
          {arrayIndex.map(char => (
            <li
              style={{
                width: 300,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {char.name}
              <button
                onClick={() =>
                  setArrayIndex(prevState => prevState.filter(e => e.name !== char.name))
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: 15 }}>
        <h1>List with index keys</h1>
        <button
          disabled={arrayIndex2.length === characters.length}
          onClick={() => setArrayIndex2(prev => [...prev, difference(characters, prev)[0]])}
        >
          Load more
        </button>
        <button onClick={() => setArrayIndex2(prev => orderBy(prev, 'name', ['asc']))}>Asc</button>
        <button onClick={() => setArrayIndex2(prev => orderBy(prev, 'name', ['desc']))}>
          Desc
        </button>
        <ul style={{ padding: 0 }}>
          {arrayIndex2.map((char, i) => (
            <li key={i} style={{ width: 300, display: 'flex', justifyContent: 'space-between' }}>
              {char.name} : {i}
              <button
                onClick={() =>
                  setArrayIndex2(prevState => prevState.filter(e => e.name !== char.name))
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: 15 }}>
        <h1>List with unique keys</h1>
        <button
          disabled={arrayIndex3.length === characters.length}
          onClick={() => setArrayIndex3(prev => [...prev, difference(characters, prev)[0]])}
        >
          Load more
        </button>
        <button
          onClick={() =>
            setArrayIndex3(prev => [
              ...prev.sort(({ name: a }, { name: b }) =>
                sortDirectionDecorator(compareLocale)('asc')(a, b)
              ),
            ])
          }
        >
          Asc
        </button>
        <button onClick={() => setArrayIndex3(prev => orderBy(prev, 'name', ['desc']))}>
          Desc
        </button>
        <ul style={{ padding: 0 }}>
          {arrayIndex3.map(char => {
            return (
              <li
                key={char.name}
                style={{ width: 340, display: 'flex', justifyContent: 'space-between' }}
              >
                {char.name} - key: {char.name}
                <button
                  onClick={() =>
                    setArrayIndex3(prevState => prevState.filter(e => e.name !== char.name))
                  }
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
