import { useTabs } from "./useTabs";

function UseTabsIndex() {
  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1",
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      <h1>useTabs</h1>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTabsIndex;
