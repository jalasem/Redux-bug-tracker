import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { addBug, removeBug, resolveBug, unresolveBug } from "./store/actions";

const generateId = () => Math.random().toString(36).substring(2, 7);

function App() {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state);
  const totalBugs = useSelector((state) => state.length);
  const totalUnresolved = useSelector(
    (state) => state.filter((bug) => !bug.resolved).length
  );
  const totalResolved = useSelector(
    (state) => state.filter((bug) => bug.resolved).length
  );

  const [newBug, setNewBug] = useState("");

  const handleAddBug = (e) => {
    e.preventDefault();

    if (!newBug.trim()) return;

    const bugId = generateId();
    dispatch(addBug(newBug, bugId));
    setNewBug("");
  };

  const unresolvedBugs = allBugs.filter((bug) => !bug.resolved);
  const resolvedBugs = allBugs.filter((bug) => bug.resolved);

  return (
    <div className="App">
      <header>Bug Tracker</header>
      <form onSubmit={handleAddBug}>
        <input
          value={newBug}
          onInput={(e) => setNewBug(e.target.value)}
          type="text"
          placeholder="Enter new bug"
        />
        <img src="/images/add.svg" alt="Add" onClick={handleAddBug} />
      </form>

      <div className="bugs">
        <h2 className="heading">Unresolved</h2>
        <div className="unresolved-bugs">
          {unresolvedBugs.length ? (
            unresolvedBugs.map((bug) => (
              <div key={bug.id} className="bug">
                <img
                  onClick={() => dispatch(resolveBug(bug.id))}
                  src="/images/bug.svg"
                  alt="Bug"
                  className="icon"
                />
                <span>{bug.description}</span>
                <img
                  onClick={() => dispatch(removeBug(bug.id))}
                  className="icon"
                  src="/images/bin.svg"
                  alt="delete"
                />
              </div>
            ))
          ) : (
            <div className="empty">List empty</div>
          )}
        </div>

        <h2 className="heading">Resolved</h2>
        <div className="resolved-bugs">
          {resolvedBugs.length ? (
            resolvedBugs.map((bug) => (
              <div key={bug.id} className="bug">
                <img
                  onClick={() => dispatch(unresolveBug(bug.id))}
                  src="/images/check.svg"
                  alt="Bug"
                  className="icon"
                />
                <span>{bug.description}</span>
                <img
                  onClick={() => dispatch(removeBug(bug.id))}
                  className="icon"
                  src="/images/bin.svg"
                  alt="delete"
                />
              </div>
            ))
          ) : (
            <div className="empty">List empty</div>
          )}
        </div>
      </div>

      <footer>
        <span>Total({totalBugs})</span>
        <span>Unresolved({totalUnresolved})</span>
        <span>Resolved({totalResolved})</span>
      </footer>
    </div>
  );
}

export default App;
