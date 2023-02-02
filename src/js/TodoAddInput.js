const TodoAddInput = document.querySelector(".TodoAddInput");

const TodoAddBtn = document.querySelector(".TodoAddBtn");

let TodoListItems = [];

//각 li에 id값을 붙여줄것이다. 이것을 이용해서 완료상태와 삭제를 해줄것
let ItemId = 0;

TodoAddBtn.addEventListener("click", (event) => {
  if (TodoAddInput.value) {
    //값이 없으면 false이다.
    let newItems = { id: ItemId, content: TodoAddInput.value };
    TodoAddInput.value = "";
    // ItemId++;
    TodoListItems.push(newItems);
    List();
  } else {
    TodoAddInput.focus();
    //아무것도 입력하지 않았으면 input창이 focus되도록 설정
  }
});

const TestBtn = document.querySelector(".test");
TestBtn.addEventListener("click", (event) => {
  console.log(TodoListItems);
  console.log("작동");
});

const TodoList = document.querySelector(".TodoList");
const List = () => {
  // li와 li안에 들어가는 것들 만드는 함수
  // li item하나 만드는것
  let ListBox = document.createElement("li");
  ListBox.className = "item";
  ListBox.id = ItemId;

  let Text = document.createElement("div");
  let CheckBtn = document.createElement("button");
  CheckBtn.className = "CheckBtn";

  let RemoveBtn = document.createElement("button");
  RemoveBtn.className = "RemoveBtn";

  Text.innerHTML = TodoListItems[TodoListItems.length - 1].content;
  //마지막 요소만 추가된다.

  ListBox.appendChild(CheckBtn);
  ListBox.appendChild(Text);
  ListBox.appendChild(RemoveBtn);

  //최종적으로 ul에 만든 li붙여준다.
  TodoList.append(ListBox);
  console.log(TodoList);
  ItemId++;

  //지역변수라 밖에선 사용할 수 없다.
  RemoveBtn.addEventListener("click", (event) => {
    //클릭 대상의 부모 요소를 삭제시켜주었다.

    let NewTodoList = TodoListItems.filter(
      (el) => el.id != event.target.parentElement.id
    );

    TodoListItems = NewTodoList;
    event.target.parentNode.remove();
    console.log(TodoListItems);
  });
};
