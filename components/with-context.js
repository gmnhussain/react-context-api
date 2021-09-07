import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Parent() {
  const { counter } = useContext(AppContext);
  return (
    <div className="block">
      <div className="name">Person</div>
      <div className="count">Count: {counter}</div>
      <Son1 />
      <Son2 />
    </div>
  );
}

export const Son1 = () => {
  const { counter } = useContext(AppContext);
  return (
    <div className="block">
      <div className="name">Son1</div>
      <div className="count">Count: {counter}</div>
      <Son1Child1 />
      <Son1Child2 />
    </div>
  );
};

export const Son1Child1 = () => {
  const { counter, increase, decrease } = useContext(AppContext);
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

export const Son1Child2 = () => {
  const { counter, increase, decrease } = useContext(AppContext);
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

export const Son2 = () => {
  const { counter } = useContext(AppContext);
  return (
    <div className="block">
      <div className="name">Son2</div>
      <div className="count">Count: {counter}</div>
      <Son2Child1 />
      <Son2Child2 />
    </div>
  );
};

export const Son2Child1 = () => {
  const { counter, increase, decrease } = useContext(AppContext);
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

export const Son2Child2 = () => {
  const { counter, increase, decrease } = useContext(AppContext);
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
