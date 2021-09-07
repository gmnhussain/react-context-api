import { useState } from "react";

export default function Parent() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="block">
      <div className="name">Person</div>
      <div className="count">Count: {counter}</div>
      <Son1 counter={counter} increase={increase} decrease={decrease} />

      <Son2 counter={counter} increase={increase} decrease={decrease} />
    </div>
  );
}

export const Son1 = ({ counter, increase, decrease }) => {
  return (
    <div className="block">
      <div className="name">Son1</div>
      <div className="count">Count: {counter}</div>
      <Son1Child1 counter={counter} increase={increase} decrease={decrease} />

      <Son1Child2 counter={counter} increase={increase} decrease={decrease} />
    </div>
  );
};

export const Son1Child1 = ({ counter, increase, decrease }) => {
  return (
    <div className="block">
      <div className="name">Son1 Child1</div>
      <div className="count">Count: {counter}</div>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
};

export const Son1Child2 = ({ counter, increase, decrease }) => {
  return (
    <div className="block">
      <div className="name">Son1 Child2</div>
      <div className="count">Count: {counter}</div>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
};

export const Son2 = ({ counter, increase, decrease }) => {
  return (
    <div className="block">
      <div className="name">Son2</div>
      <div className="count">Count: {counter}</div>
      <Son2Child1 counter={counter} increase={increase} decrease={decrease} />

      <Son2Child2 counter={counter} increase={increase} decrease={decrease} />
    </div>
  );
};

export const Son2Child1 = ({ counter, increase, decrease }) => {
  return (
    <div className="block">
      <div className="name">Son2 Child1</div>
      <div className="count">Count: {counter}</div>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
};

export const Son2Child2 = ({ counter, increase, decrease }) => {
  return (
    <div className="block">
      <div className="name">Son2 Child2</div>
      <div className="count">Count: {counter}</div>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
};
