import { usePreventLeave } from "./usePreventLeave";

function UsePreventLeaveIndex() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h1>usePreventLeave</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

export default UsePreventLeaveIndex;
