import { Node } from "./LinkedList.js";
import { LinkedList } from "./LinkedList.js";

test("Create new node", () => {
  const node = new Node();
  expect(node.value).toBeNull();
  expect(node.nextNode).toBeNull();
});

test("Create new node with value", () => {
  const node = new Node("dog");
  expect(node.value).toBe("dog");
  expect(node.nextNode).toBeNull();
});

test("Create new linked list", () => {
  const list = new LinkedList();
  expect(list).toEqual({});
});

test("Call head() on empty list", () => {
  const list = new LinkedList();
  expect(list.head()).toBeUndefined();
});

test("Call tail() on empty list", () => {
  const list = new LinkedList();
  expect(list.tail()).toBeUndefined();
});

test("Call size() on empty list", () => {
  const list = new LinkedList();
  expect(list.size()).toBe(0);
});

test("Prepend an item (dog)", () => {
  const list = new LinkedList();
  list.prepend("dog");
  expect(list.size()).toBe(1);
  expect(list.head()).toBe("dog");
  expect(list.tail()).toBe("dog");
});

test("Prepend multiple items (dog, cat, monkey)", () => {
  const list = new LinkedList();
  list.prepend("dog");
  list.prepend("cat");
  list.prepend("monkey");
  expect(list.size()).toBe(3);
  expect(list.head()).toBe("monkey");
  expect(list.tail()).toBe("dog");
});

test("Append an item (dog)", () => {
  const list = new LinkedList();
  list.append("dog");
  expect(list.size()).toBe(1);
  expect(list.head()).toBe("dog");
  expect(list.tail()).toBe("dog");
});

test("Append multiple items (dog, cat, monkey)", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.size()).toBe(3);
  expect(list.head()).toBe("dog");
  expect(list.tail()).toBe("monkey");
});

test("At index value of an empty list", () => {
  const list = new LinkedList();
  expect(list.at(0)).toBeUndefined();
});

test("At index value with higher index", () => {
  const list = new LinkedList();
  expect(list.at(2)).toBeUndefined();
});

test("At index value (1)", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.at(1)).toBe("cat");
});

test("Pop from empty list", () => {
  const list = new LinkedList();
  expect(list.pop()).toBeUndefined();
});

test("Pop an item from list", () => {
  const list = new LinkedList();
  list.append("dog");
  list.pop();
  expect(list.size()).toBe(0);
  expect(list.head()).toBeUndefined();
  expect(list.tail()).toBeUndefined();
});

test("Pop from list", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  list.pop();
  expect(list.head()).toBe("cat");
  expect(list.at(0)).toBe("cat");
  expect(list.at(1)).toBe("monkey");
  expect(list.size()).toBe(2);
});

test("Pop until empty list", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  list.pop();
  list.pop();
  list.pop();
  expect(list.size()).toBe(0);
  expect(list.head()).toBeUndefined();
  expect(list.tail()).toBeUndefined();
});

test("Contains value on empty list", () => {
  const list = new LinkedList();
  expect(list.contains("cat")).toBe(false);
});

test("Contains value: cat", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.contains("cat")).toBe(true);
});

test("Contains value: invalid value", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.contains("dinosaur")).toBe(false);
});

test("Find index of value on empty list", () => {
  const list = new LinkedList();
  expect(list.findIndex("cat")).toBe(-1);
});

test("Find index of value: cat", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.findIndex("cat")).toBe(1);
});

test("Find index of value: invalid value", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.findIndex("dinosaur")).toBe(-1);
});

test("Print list: empty list", () => {
  const list = new LinkedList();
  expect(list.toString()).toBe("");
});

test("Print list: one item", () => {
  const list = new LinkedList();
  list.append("dog");
  expect(list.toString()).toBe("(dog) -> null");
});

test("Print list: multiple items", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  expect(list.toString()).toBe("(dog) -> (cat) -> (monkey) -> null");
});

test("Insert at index: out of range", () => {
  const list = new LinkedList();
  expect(() => list.insertAt(1, "hippo")).toThrow(RangeError);
});

test("Insert at index: negative range", () => {
  const list = new LinkedList();
  expect(() => list.insertAt(-1, "hippo")).toThrow(RangeError);
});

test("Insert at index: 1 item", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  list.insertAt(1, "hippo");
  expect(list.toString()).toBe("(dog) -> (cat) -> (hippo) -> (monkey) -> null");
});

test("Insert at index: multiple items", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  list.append("monkey");
  list.insertAt(1, "hippo", "cow");
  expect(list.toString()).toBe(
    "(dog) -> (cat) -> (hippo) -> (cow) -> (monkey) -> null",
  );
});
