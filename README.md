# Voting App
## Planning
### Features: 
* **Create Election**
  * Minimum 2 choices
  * Input Name
* **Create Representative**
  * Minimum 1 Representative
  * Input Name
  * Input Email
* **Create Elector and Vote**
  * Input Name 
  * Select Choice Intention 
  * Vote on Representative 
* **Representative Voting**
  * Display amount of Electors 
  * Display Electors Intentions and Percentages
  * Vote on choice
* **Count Votes**
  * Calculate winner
  * Calculate Electors Intentions percentages
  * Compute Representative's votes
  * Calculate Agreement Rate


## Tables

* Election
Id | Created | Started | Ended 
<br>

* Electors
Id | Name | Intension | Vote (Representative_Id) 
<br>

* Representatives
Id | Name | Email | Vote (Choice_Id) 
<br>

* Choices
Id | Name |  Election_Id 
<br>