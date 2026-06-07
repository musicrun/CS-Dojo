export const questions = [
  { id: "q1-a", section: "Paper 2", number: 1, part: "a", source: "Teacher Summative #5 Q10c, adapted", scenario: "Two sets store user IDs:\ngroup_a = {101, 102, 105, 107, 110}\ngroup_b = {102, 107, 115, 120}", prompt: "State the output of: print(115 in group_a)", marks: 1 },
  { id: "q1-b", section: "Paper 2", number: 1, part: "b", source: "Teacher Summative #5 Q10c, adapted", scenario: "group_a = {101, 102, 105, 107, 110}\ngroup_b = {102, 107, 115, 120}", prompt: "State the output of: print(group_a | group_b)", marks: 1 },
  { id: "q1-c", section: "Paper 2", number: 1, part: "c", source: "Teacher Summative #5 Q10c, adapted", scenario: "group_a = {101, 102, 105, 107, 110}\ngroup_b = {102, 107, 115, 120}", prompt: "State the output of: print(group_a & group_b)", marks: 1 },
  { id: "q1-d", section: "Paper 2", number: 1, part: "d", source: "Teacher Summative #5 Q10c, adapted", scenario: "group_a = {101, 102, 105, 107, 110}\ngroup_b = {102, 107, 115, 120}", prompt: "State the output of: print(group_a - group_b)", marks: 1 },
  { id: "q1-e", section: "Paper 2", number: 1, part: "e", source: "Teacher Summative #5 Q10c, adapted", prompt: "State two defining properties of a set.", marks: 2 },

  { id: "q2-a", section: "Paper 2", number: 2, part: "a", source: "Teacher Summative #5 Q14, adapted", scenario: "A travel agency manages Hotel objects. Each hotel has a booking code, combined hotel name and city, year built, one-character star rating, nightly price, breakfast-included flag, and pool-available flag. All internal data must be restricted from direct external access or modification.", prompt: "Using an example from the scenario, distinguish between a class and an instantiation of a class.", marks: 2 },
  { id: "q2-b", section: "Paper 2", number: 2, part: "b", source: "Teacher Summative #5 Q14, adapted", scenario: "A travel agency manages its hotel listings using Hotel objects.", prompt: "Identify two characteristics of Object-Oriented Programming exemplified by the scenario.", marks: 2 },
  { id: "q2-c", section: "Paper 2", number: 2, part: "c", source: "Teacher Summative #5 Q14, adapted", scenario: "Each hotel has a booking code, combined hotel name and city, year built, one-character star rating ('3', '4', or '5'), nightly price, breakfast-included Boolean, and pool-available Boolean. All internal data must be restricted from direct external access or modification.", prompt: "Construct the Python class Hotel, including a constructor and all necessary private attributes based on the specifications.", marks: 6 },
  { id: "q2-d", section: "Paper 2", number: 2, part: "d", source: "Teacher Summative #5 Q14, adapted", prompt: "Construct a mutator (setter) method that allows the system to update the nightly price, including appropriate validation.", marks: 3 },
  { id: "q2-e", section: "Paper 2", number: 2, part: "e", source: "Teacher Summative #5 Q14, adapted", prompt: "Outline one specific limitation of using a Boolean data type for pool_available if the company later decides to track different pool types such as indoor, outdoor, and rooftop.", marks: 2 },

  { id: "q3-a", section: "Paper 2", number: 3, part: "a", source: "Teacher Summative #5 Q15, adapted", scenario: "TrafficLog requirements:\n1. Keep every arriving IP address in exact arrival order.\n2. Store flagged threat IPs without duplicates.\n3. Protect the internal server ID and total blocked-threat count from direct external modification.", prompt: "Construct the Python class TrafficLog. Include a constructor and appropriate internal data structures satisfying all three requirements.", marks: 6 },
  { id: "q3-b", section: "Paper 2", number: 3, part: "b", source: "Teacher Summative #5 Q15, adapted", prompt: "Construct a method process_packet(ip_address, is_threat) that updates the records correctly, ensuring the blocked-threat count is incremented only when a new threat is flagged.", marks: 4 },
  { id: "q3-c", section: "Paper 2", number: 3, part: "c", source: "Teacher Summative #5 Q15, adapted", prompt: "Construct a method check_status(ip_address) that returns \"Flagged\" if the IP has been flagged and \"Clear\" otherwise.", marks: 3 },
  { id: "q3-d", section: "Paper 2", number: 3, part: "d", source: "Teacher Summative #5 Q15, adapted", prompt: "Explain why a list is suitable for preserving the IP arrival sequence but not for storing the banned list.", marks: 2 },

  { id: "q4-a", section: "Paper 2", number: 4, part: "a", source: "New - B3.2.1", scenario: "A university system has a base class Person with name, age, and introduce(). Student and Professor subclasses add their own attributes.", prompt: "Define inheritance in the context of OOP.", marks: 2 },
  { id: "q4-b", section: "Paper 2", number: 4, part: "b", source: "New - B3.2.1", prompt: "Construct the Python class Person with a constructor and an introduce() method that prints \"Hi, I'm [name], age [age].\"", marks: 3 },
  { id: "q4-c", section: "Paper 2", number: 4, part: "c", source: "New - B3.2.1", scenario: "Student has all Person attributes plus a student ID and a major.", prompt: "Construct the subclass Student that inherits from Person and adds the additional attributes. Ensure its constructor properly uses the parent constructor.", marks: 4 },
  { id: "q4-d", section: "Paper 2", number: 4, part: "d", source: "New - B3.2.1", prompt: "Explain how inheritance promotes code reusability in this scenario.", marks: 3 },

  { id: "q5-a", section: "Paper 2", number: 5, part: "a", source: "New - B3.2.2", prompt: "Define polymorphism.", marks: 2 },
  { id: "q5-b", section: "Paper 2", number: 5, part: "b", source: "New - B3.2.2", prompt: "Distinguish between static polymorphism and dynamic polymorphism.", marks: 4 },
  { id: "q5-c", section: "Paper 2", number: 5, part: "c", source: "New - B3.2.2", prompt: "State which form of polymorphism Python primarily supports and justify your answer.", marks: 2 },

  { id: "q6-a", section: "Paper 2", number: 6, part: "a", source: "New - B3.2.2", scenario: "A Shape base class has area() returning 0. Circle stores radius r and overrides area() to return 3.14 * r * r. Rectangle stores width and height and overrides area() to return width * height.", prompt: "Construct the Python code for the Shape, Circle, and Rectangle classes.", marks: 6 },
  { id: "q6-b", section: "Paper 2", number: 6, part: "b", source: "New - B3.2.2", prompt: "Construct a function print_area(s) that takes any Shape object and prints its area. Demonstrate how it produces different output for a Circle and a Rectangle.", marks: 3 },
  { id: "q6-c", section: "Paper 2", number: 6, part: "c", source: "New - B3.2.2", prompt: "Explain how this example demonstrates dynamic polymorphism.", marks: 2 },

  { id: "q7-a", section: "Paper 2", number: 7, part: "a", source: "New - B3.2.3", prompt: "Define abstraction in OOP.", marks: 2 },
  { id: "q7-b", section: "Paper 2", number: 7, part: "b", source: "New - B3.2.3", prompt: "Distinguish between abstraction and encapsulation.", marks: 3 },
  { id: "q7-c", section: "Paper 2", number: 7, part: "c", source: "New - B3.2.3", prompt: "Explain how abstraction supports modularity in software design.", marks: 3 },

  { id: "q8-a", section: "Paper 2", number: 8, part: "a", source: "New - B3.2.4", scenario: "A car manufacturer's software models Car using classes such as Engine, Wheel, and Driver.", prompt: "Distinguish between composition and aggregation.", marks: 3 },
  { id: "q8-b", section: "Paper 2", number: 8, part: "b", source: "New - B3.2.4", prompt: "Identify whether the relationship between Car and Engine is composition or aggregation. Justify your answer.", marks: 2 },
  { id: "q8-c", section: "Paper 2", number: 8, part: "c", source: "New - B3.2.4", prompt: "Identify whether the relationship between Car and Driver is composition or aggregation. Justify your answer.", marks: 2 },
  { id: "q8-d", section: "Paper 2", number: 8, part: "d", source: "New - B3.2.4", prompt: "Explain how aggregation supports reusability in OOP.", marks: 2 },
  { id: "q8-e", section: "Paper 2", number: 8, part: "e", source: "New - B3.2.4", prompt: "Construct Python classes Car and Engine that demonstrate aggregation. Create the Engine object separately and pass it into the Car constructor.", marks: 4 },

  { id: "q9-a", section: "Paper 2", number: 9, part: "a", source: "New - B3.2.5", prompt: "Define the term design pattern.", marks: 2 },
  { id: "q9-b", section: "Paper 2", number: 9, part: "b", source: "New - B3.2.5", prompt: "Explain the purpose of the Singleton pattern and give one real-world scenario where it would be used.", marks: 3 },
  { id: "q9-c", section: "Paper 2", number: 9, part: "c", source: "New - B3.2.5", prompt: "Explain the purpose of the Factory pattern and outline the problem it solves.", marks: 3 },
  { id: "q9-d", section: "Paper 2", number: 9, part: "d", source: "New - B3.2.5", prompt: "Explain how the Observer pattern promotes loose coupling between classes.", marks: 3 },

  { id: "q10-a", section: "Paper 2", number: 10, part: "a", source: "New - B4.1.1 and B4.1.6", prompt: "Define an Abstract Data Type (ADT).", marks: 2 },
  { id: "q10-b", section: "Paper 2", number: 10, part: "b", source: "New - B4.1.1 and B4.1.6", prompt: "Distinguish between an ADT and a data structure, using a Stack as an example.", marks: 3 },
  { id: "q10-c", section: "Paper 2", number: 10, part: "c", source: "New - B4.1.1 and B4.1.6", prompt: "Explain how ADTs support modularity in software design.", marks: 3 },
  { id: "q10-d", section: "Paper 2", number: 10, part: "d", source: "New - B4.1.1 and B4.1.6", prompt: "Outline one advantage of separating an ADT's interface from its implementation.", marks: 2 },

  { id: "q11-a", section: "Paper 2", number: 11, part: "a", source: "New - B2.2.3 and B2.2.4", scenario: "A browser uses a Stack for visited-page history and a Queue for requested downloads.", prompt: "Define a stack in terms of how its elements are added and removed (LIFO).", marks: 2 },
  { id: "q11-b", section: "Paper 2", number: 11, part: "b", source: "New - B2.2.3 and B2.2.4", prompt: "Define a queue in terms of how its elements are added and removed (FIFO).", marks: 2 },
  { id: "q11-c", section: "Paper 2", number: 11, part: "c", source: "New - B2.2.3 and B2.2.4", prompt: "Explain why a stack is the appropriate ADT for the browser's Back button history.", marks: 2 },
  { id: "q11-d", section: "Paper 2", number: 11, part: "d", source: "New - B2.2.3 and B2.2.4", prompt: "Explain why a queue is the appropriate ADT for download requests.", marks: 2 },
  { id: "q11-e", section: "Paper 2", number: 11, part: "e", source: "New - B2.2.3 and B2.2.4", scenario: "Starting with an empty stack s:\ns.push(\"A\")\ns.push(\"B\")\ns.push(\"C\")\ns.pop()\ns.push(\"D\")\ns.pop()", prompt: "State the stack contents after these operations, identifying the element at the top.", marks: 2 },

  { id: "q12-a", section: "Paper 2", number: 12, part: "a", source: "M18 HL Q19, adapted to Python", scenario: "def mystery(n):\n    if n <= 1:\n        return n\n    else:\n        return mystery(n - 1) + mystery(n - 2)", prompt: "State two features that make this function recursive.", marks: 2 },
  { id: "q12-b", section: "Paper 2", number: 12, part: "b", source: "M18 HL Q19, adapted to Python", scenario: "def mystery(n):\n    if n <= 1:\n        return n\n    else:\n        return mystery(n - 1) + mystery(n - 2)", prompt: "State the output of mystery(5).", marks: 2 },
  { id: "q12-c", section: "Paper 2", number: 12, part: "c", source: "M18 HL Q19, adapted to Python", prompt: "Identify the purpose of the mystery algorithm.", marks: 1 },
  { id: "q12-d", section: "Paper 2", number: 12, part: "d", source: "M18 HL Q19, adapted to Python", prompt: "Outline one disadvantage of using recursion for this problem instead of an iterative loop.", marks: 2 },

  { id: "q13-a", section: "Paper 2", number: 13, part: "a", source: "New - B4.1.4", scenario: "The following book titles are inserted into an empty Binary Search Tree in this order:\nMango, Apple, Zebra, Berry, Plum, Orange, Yellow", prompt: "Sketch the resulting Binary Search Tree.", marks: 3 },
  { id: "q13-b", section: "Paper 2", number: 13, part: "b", source: "New - B4.1.4", prompt: "State the output of an in-order traversal of the tree.", marks: 2 },
  { id: "q13-c", section: "Paper 2", number: 13, part: "c", source: "New - B4.1.4", prompt: "Explain why a balanced BST is preferable to an unbalanced BST for searching, referring to time complexity.", marks: 3 },
  { id: "q13-d", section: "Paper 2", number: 13, part: "d", source: "Teacher Summative #5 Q11d, adapted", prompt: "Compare the suitability of a binary tree and a binary search tree for storing an address book. Identify the superior choice and justify your answer.", marks: 3 },

  { id: "q14-a", section: "Paper 2", number: 14, part: "a", source: "M23 HL Q16, adapted to Python", scenario: "ClientNode stores a customer name and next reference. ClientList stores root, which is None when empty.", prompt: "Construct a method add_to_end(self, visitor) for ClientList that adds a new ClientNode to the end, handling an empty list.", marks: 5 },
  { id: "q14-b", section: "Paper 2", number: 14, part: "b", source: "M23 HL Q16, adapted to Python", prompt: "Construct a method count_clients(self) that returns the total number of clients in the list.", marks: 3 },
  { id: "q14-c", section: "Paper 2", number: 14, part: "c", source: "M23 HL Q16, adapted to Python", prompt: "State the Big O time complexity of add_to_end and justify your answer.", marks: 2 },

  { id: "q15-a", section: "Paper 2", number: 15, part: "a", source: "M23 HL Q13-14 and Teacher Q15d, adapted", prompt: "Define encapsulation.", marks: 2 },
  { id: "q15-b", section: "Paper 2", number: 15, part: "b", source: "M23 HL Q13-14 and Teacher Q15d, adapted", prompt: "Explain two benefits of using encapsulation in OOP.", marks: 4 },
  { id: "q15-c", section: "Paper 2", number: 15, part: "c", source: "M23 HL Q13-14 and Teacher Q15d, adapted", prompt: "Distinguish between a static variable and a non-static (instance) variable.", marks: 2 },
  { id: "q15-d", section: "Paper 2", number: 15, part: "d", source: "M23 HL Q13-14 and Teacher Q15d, adapted", prompt: "Explain a scenario where using Python's @property decorator is preferable to writing a standard getter method.", marks: 2 },

  { id: "q16-a", section: "Paper 2", number: 16, part: "a", source: "New - B2.1.2", scenario: "A booking reference has three uppercase office letters, a hyphen, and a six-digit number, for example AMM-204512.", prompt: "Construct a Python function get_office_code(ref) that returns the first three characters.", marks: 2 },
  { id: "q16-b", section: "Paper 2", number: 16, part: "b", source: "New - B2.1.2", prompt: "Construct a Python function get_booking_number(ref) that returns the six-digit booking number as an integer.", marks: 3 },
  { id: "q16-c", section: "Paper 2", number: 16, part: "c", source: "New - B2.1.2", prompt: "Construct a Python function is_valid(ref) that returns True if a reference has three uppercase letters, a hyphen, and six digits, and False otherwise.", marks: 4 },

  { id: "q17-a", section: "Paper 2", number: 17, part: "a", source: "New - B1.1", scenario: "A developer is designing a music streaming application from scratch.", prompt: "State the four fundamental concepts of computational thinking.", marks: 2 },
  { id: "q17-b", section: "Paper 2", number: 17, part: "b", source: "New - B1.1", scenario: "A developer is designing a music streaming application.", prompt: "Using the application as an example, explain how decomposition would be applied during the design phase.", marks: 2 },
  { id: "q17-c", section: "Paper 2", number: 17, part: "c", source: "New - B1.1", scenario: "A developer is designing a music streaming application.", prompt: "Using the same scenario, explain how abstraction would be applied.", marks: 2 },
  { id: "q17-d", section: "Paper 2", number: 17, part: "d", source: "New - B1.1", prompt: "Construct a problem specification for a feature that searches for songs by title. Include inputs, outputs, processing, and constraints.", marks: 4 },
];
