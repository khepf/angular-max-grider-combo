import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverCreated = false;
  userName = "";
  justAString = "";
  maybeAPalindrome = "";
  reversedIntInput = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = "";
  }

  // Section 3: String Reversal
  reverseInput(event: Event) {
    const inputString = (<HTMLInputElement>event.target).value;
    this.justAString = inputString.split('').reverse().join('');
  }
  // Section 4: Palindromes
  isPalindrome(event: Event) {
    const inputString = (<HTMLInputElement>event.target).value;
    const reversedInputString = inputString
      .split("")
      .reverse()
      .join("");
    if (inputString === reversedInputString) {
      this.maybeAPalindrome = "This is a palindrome!!!";
    } else {
      this.maybeAPalindrome = "This is not a palindrone!!!";
    }
  }
  // Section 5: Reversing an Int
  reverseInt(event: any) {
    const inputString = (<HTMLInputElement>event.target).value;
    const parsed = parseInt(inputString);


    if (inputString && Number(inputString)) {
      this.reversedIntInput = inputString
        .split("")
        .reverse()
        .join("");
      
    } else {
      this.reversedIntInput = "Nice try but this is not a number.";
    }
  }
}
