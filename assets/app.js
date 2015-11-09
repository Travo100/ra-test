angular
	.module('app', []);
(function(){
    angular
        .module('app')
        .controller('testController', testController);

        function testController() {
            var vm = this;
            
            vm.thousand = 1000;
            vm.tenthousand = 10000;
            vm.hundredthousand = 100000;
            vm.thousandtwentyfive = 1250;
            vm.tenthousandtwentyfive = 12500;
            vm.hundredthousandtwentyfive = 125000;
            vm.thousandfive = 1500;
            vm.tenthousandfive = 15000;
            vm.hundredthousandfive = 150000;
            vm.thousandsevenfive = 1750;
            vm.tenthousandsevenfive = 17500;
            vm.hundredthousandsevenfive = 175000;
            vm.thousandeight = 1800;
            vm.tenthousandeight = 18000;
            vm.hundredthousandeight = 180000;
            vm.thousandnine = 9999;
            vm.tenthousandnine = 99999;
            vm.hundredthousandnine = 999999;

            vm.million = 1000000;
            vm.tenmillion = 10000000;
            vm.hundredmillion = 100000000;
            vm.milliontwentyfive = 1250000;
            vm.tenmilliontwentyfive = 12500000;
            vm.hundredmilliontwentyfive = 125000000;
            vm.millionfive = 1500000;
            vm.tenmillionfive = 15000000;
            vm.hundredmillionfive = 150000000;
            vm.millionsevenfive = 1750000;
            vm.tenmillionsevenfive = 17500000;
            vm.hundredmillionsevenfive = 175000000;
            vm.millioneight = 1800000;
            vm.tenmillioneight = 18000000;
            vm.hundredmillioneight = 180000000;
            vm.millionnine = 9999000;
            vm.tenmillionnine = 99999999;
            vm.hundredmillionnine = 999999999;

            vm.billion = 1000000000;
            vm.tenbillion = 10000000000;
            vm.hundredbillion = 100000000000;
            vm.billiontwentyfive = 1250000000;
            vm.tenbilliontwentyfive = 12500000000;
            vm.hundredbilliontwentyfive = 125000000000;
            vm.billionfive = 1500000000;
            vm.tenbillionfive = 15000000000;
            vm.hundredbillionfive = 150000000000;
            vm.billionsevenfive = 1750000000;
            vm.tenbillionsevenfive = 17500000000;
            vm.hundredbillionsevenfive = 175000000000;
            vm.billioneight = 1800000000;
            vm.tenbillioneight = 18000000000;
            vm.hundredbillioneight = 180000000000;
            vm.billionnine = 9999000000;
            vm.tenbillionnine = 99999999000;
            vm.hundredbillionnine = 999999999000;

            vm.trillion = 1000000000000;
            vm.tentrillion = 10000000000000;
            vm.hundredtrillion = 100000000000000;
            vm.trilliontwentyfive = 1250000000000;
            vm.tentrilliontwentyfive = 12500000000000;
            vm.hundredtrilliontwentyfive = 125000000000000;
            vm.trillionfive = 1500000000000;
            vm.tentrillionfive = 15000000000000;
            vm.hundredtrillionfive = 150000000000000;
            vm.trillionsevenfive = 1750000000000;
            vm.tentrillionsevenfive = 17500000000000;
            vm.hundredtrillionsevenfive = 175000000000000;
            vm.trillioneight = 1800000000000;
            vm.tentrillioneight = 18000000000000;
            vm.hundredtrillioneight = 180000000000000;
            vm.trillionnine = 9999999000000;
            vm.tentrillionnine = 99999999999000;
            vm.hundredtrillionnine = 999999999999000;
        }
}());
angular
  .module('app')
  .filter('numberAbbrev', numberAbbrev);
  function numberAbbrev() {
    var letter;
    return function(num) {
    
    // give the number the correct designator, based on its original value and up 100th trillion
    // ie : 10,000 = 10K, 1,000,000 = 1M, 1,000,000,000 = 1B, 1,000,000,000,000 = 1T
    if (num >= Math.pow(10, 4) && num < Math.pow(10, 6)){
        letter = 'K';
     } else if (num >= Math.pow(10, 6) && num < Math.pow(10, 9)){
        letter = 'M';
     } else if (num >= Math.pow(10, 9) && num < Math.pow(10, 12)){
        letter = 'B';
     } else if (num >= Math.pow(10, 12) && num < Math.pow(10, 15)){
        letter = 'T';
     } else {
        letter = '';
        return num.toFixed(0);
     }

      // place the decimal point in the correct spot
      // so if the number is 
      // 1,253,502 = 1.3M
      // 12,542,423 = 12.5M
      // 124,634,242 = 125M
      var y = 0;
      var z = 0;
      var x = "";
      for (var i = 1; i < 16; i++) {
        while(num <= Math.pow(10, i)) {
          if (num === Math.pow(10, 4) || num === Math.pow(10, 6) || num === Math.pow(10, 9) || num === Math.pow(10, 12)) {
            y = num/Math.pow(10, i);
          }
          if (num > Math.pow(10, 6) && num <= Math.pow(10, 7) || num > Math.pow(10, 9) && num <= Math.pow(10, 10) || num > Math.pow(10, 12) && num <= Math.pow(10, 13)) {
            y = num/Math.pow(10, i - 1);
          }
          if (num > Math.pow(10, 4) && num <= Math.pow(10, 5) || num > Math.pow(10, 7) && num <= Math.pow(10, 8) || num > Math.pow(10, 10) && num <= Math.pow(10, 11) || num > Math.pow(10, 13) && num <= Math.pow(10, 14)) {
            y = num/Math.pow(10, i - 2);
          }
          if (num > Math.pow(10, 5) && num < Math.pow(10, 6) || num > Math.pow(10, 8) && num < Math.pow(10, 9) || num > Math.pow(10, 11) && num <  Math.pow(10, 12) || num > Math.pow(10, 14) && num <= Math.pow(10, 15)) {
            y = num/Math.pow(10, i - 3);
          }   

          // thousands rounding up to millions 

          if (num >= 99999 && num < Math.pow(10, 5)) {
            z = num/Math.pow(10, i - 2);
            letter = 'K';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999 && num < Math.pow(10, 6)) {
            z = num/Math.pow(10, i );
            letter = 'M';
            return z.toFixed(0) + letter;
          } 
          
          // million rounding up to billions
          if (num >= 9999000 && num < Math.pow(10, 7)) {
            z = num/Math.pow(10, i - 1);
            letter = 'M';
            return z.toFixed(0) + letter;
          }
          if (num >= 99999000 && num < Math.pow(10, 8)) {
            z = num/Math.pow(10, i - 2);
            letter = 'M';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999000 && num < Math.pow(10, 9)) {
            z = num/Math.pow(10, i);
            letter = 'B';
            return z.toFixed(0) + letter;
          } 

          // billions rounding up to trillions
          if (num >= 9999000000 && num < Math.pow(10, 10)) {
            z = num/Math.pow(10, i - 1);
            letter = 'B';
            return z.toFixed(0) + letter;
          }
          if (num >= 99999000000 && num < Math.pow(10, 11)) {
            z = num/Math.pow(10, i - 2);
            letter = 'B';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999000000 && num < Math.pow(10, 12)) {
            z = num/Math.pow(10, i);
            letter = 'T';
            return z.toFixed(0) + letter;
          }

          // trillions rounding up to quadrillions
          if (num >= 9999999000000 && num < Math.pow(10, 13)) {
            z = num/Math.pow(10, i - 1);
            letter = 'T';
            return z.toFixed(0) + letter;
          }
          if (num >= 99999999000000 && num < Math.pow(10, 14)) {
            z = num/Math.pow(10, i - 2);
            letter = 'T';
            return z.toFixed(0) + letter;
          }
          if (num >= 999999999000000 && num < Math.pow(10, 15)) {
            z = num/Math.pow(10, i);
            letter = 'Q';
            return z.toFixed(0) + letter;
          }         
          
          x = y.toString();
          if (x.toString().charAt(1) === ".") {
            return Number(x).toFixed(2) + letter;
          } else if (x.toString().charAt(2) === ".") {
            return Number(x).toFixed(1) + letter;
          } else if (x.charAt(3) === "." && x > "1") {
            return Number(x).toFixed(0) + letter;
          } else {
            return Number(x).toFixed(0) + letter;
          }
        }
      } 
  };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL3Rlc3RDb250cm9sbGVyLmpzIiwiZmlsdGVycy9udW1iZXJBYmJyZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPLE9BQU8sSUFBSTtBQ0RwQixDQUFDLFVBQVU7SUFDUDtTQUNLLE9BQU87U0FDUCxXQUFXLGtCQUFrQjs7UUFFOUIsU0FBUyxpQkFBaUI7WUFDdEIsSUFBSSxLQUFLOztZQUVULEdBQUcsV0FBVztZQUNkLEdBQUcsY0FBYztZQUNqQixHQUFHLGtCQUFrQjtZQUNyQixHQUFHLHFCQUFxQjtZQUN4QixHQUFHLHdCQUF3QjtZQUMzQixHQUFHLDRCQUE0QjtZQUMvQixHQUFHLGVBQWU7WUFDbEIsR0FBRyxrQkFBa0I7WUFDckIsR0FBRyxzQkFBc0I7WUFDekIsR0FBRyxvQkFBb0I7WUFDdkIsR0FBRyx1QkFBdUI7WUFDMUIsR0FBRywyQkFBMkI7WUFDOUIsR0FBRyxnQkFBZ0I7WUFDbkIsR0FBRyxtQkFBbUI7WUFDdEIsR0FBRyx1QkFBdUI7WUFDMUIsR0FBRyxlQUFlO1lBQ2xCLEdBQUcsa0JBQWtCO1lBQ3JCLEdBQUcsc0JBQXNCOztZQUV6QixHQUFHLFVBQVU7WUFDYixHQUFHLGFBQWE7WUFDaEIsR0FBRyxpQkFBaUI7WUFDcEIsR0FBRyxvQkFBb0I7WUFDdkIsR0FBRyx1QkFBdUI7WUFDMUIsR0FBRywyQkFBMkI7WUFDOUIsR0FBRyxjQUFjO1lBQ2pCLEdBQUcsaUJBQWlCO1lBQ3BCLEdBQUcscUJBQXFCO1lBQ3hCLEdBQUcsbUJBQW1CO1lBQ3RCLEdBQUcsc0JBQXNCO1lBQ3pCLEdBQUcsMEJBQTBCO1lBQzdCLEdBQUcsZUFBZTtZQUNsQixHQUFHLGtCQUFrQjtZQUNyQixHQUFHLHNCQUFzQjtZQUN6QixHQUFHLGNBQWM7WUFDakIsR0FBRyxpQkFBaUI7WUFDcEIsR0FBRyxxQkFBcUI7O1lBRXhCLEdBQUcsVUFBVTtZQUNiLEdBQUcsYUFBYTtZQUNoQixHQUFHLGlCQUFpQjtZQUNwQixHQUFHLG9CQUFvQjtZQUN2QixHQUFHLHVCQUF1QjtZQUMxQixHQUFHLDJCQUEyQjtZQUM5QixHQUFHLGNBQWM7WUFDakIsR0FBRyxpQkFBaUI7WUFDcEIsR0FBRyxxQkFBcUI7WUFDeEIsR0FBRyxtQkFBbUI7WUFDdEIsR0FBRyxzQkFBc0I7WUFDekIsR0FBRywwQkFBMEI7WUFDN0IsR0FBRyxlQUFlO1lBQ2xCLEdBQUcsa0JBQWtCO1lBQ3JCLEdBQUcsc0JBQXNCO1lBQ3pCLEdBQUcsY0FBYztZQUNqQixHQUFHLGlCQUFpQjtZQUNwQixHQUFHLHFCQUFxQjs7WUFFeEIsR0FBRyxXQUFXO1lBQ2QsR0FBRyxjQUFjO1lBQ2pCLEdBQUcsa0JBQWtCO1lBQ3JCLEdBQUcscUJBQXFCO1lBQ3hCLEdBQUcsd0JBQXdCO1lBQzNCLEdBQUcsNEJBQTRCO1lBQy9CLEdBQUcsZUFBZTtZQUNsQixHQUFHLGtCQUFrQjtZQUNyQixHQUFHLHNCQUFzQjtZQUN6QixHQUFHLG9CQUFvQjtZQUN2QixHQUFHLHVCQUF1QjtZQUMxQixHQUFHLDJCQUEyQjtZQUM5QixHQUFHLGdCQUFnQjtZQUNuQixHQUFHLG1CQUFtQjtZQUN0QixHQUFHLHVCQUF1QjtZQUMxQixHQUFHLGVBQWU7WUFDbEIsR0FBRyxrQkFBa0I7WUFDckIsR0FBRyxzQkFBc0I7O0tBRWhDO0FDcEZMO0dBQ0csT0FBTztHQUNQLE9BQU8sZ0JBQWdCO0VBQ3hCLFNBQVMsZUFBZTtJQUN0QixJQUFJO0lBQ0osT0FBTyxTQUFTLEtBQUs7Ozs7SUFJckIsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksSUFBSSxHQUFHO1FBQ2hELFNBQVM7WUFDTCxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLEdBQUc7UUFDeEQsU0FBUztZQUNMLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSTtRQUN6RCxTQUFTO1lBQ0wsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJO1FBQzFELFNBQVM7WUFDTDtRQUNKLFNBQVM7UUFDVCxPQUFPLElBQUksUUFBUTs7Ozs7Ozs7TUFRckIsSUFBSSxJQUFJO01BQ1IsSUFBSSxJQUFJO01BQ1IsSUFBSSxJQUFJO01BQ1IsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztRQUMzQixNQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSTtVQUM1QixJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxRQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLFFBQVEsS0FBSyxJQUFJLElBQUksS0FBSztZQUM3RyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUk7O1VBRXZCLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxPQUFPLEtBQUssSUFBSSxJQUFJLEtBQUs7WUFDNUosSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUk7O1VBRTNCLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sT0FBTyxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxPQUFPLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSztZQUNoTixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTs7VUFFM0IsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxNQUFN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KTsiLCIoZnVuY3Rpb24oKXtcbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCd0ZXN0Q29udHJvbGxlcicsIHRlc3RDb250cm9sbGVyKTtcblxuICAgICAgICBmdW5jdGlvbiB0ZXN0Q29udHJvbGxlcigpIHtcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZtLnRob3VzYW5kID0gMTAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kID0gMTAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmQgPSAxMDAwMDA7XG4gICAgICAgICAgICB2bS50aG91c2FuZHR3ZW50eWZpdmUgPSAxMjUwO1xuICAgICAgICAgICAgdm0udGVudGhvdXNhbmR0d2VudHlmaXZlID0gMTI1MDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmR0d2VudHlmaXZlID0gMTI1MDAwO1xuICAgICAgICAgICAgdm0udGhvdXNhbmRmaXZlID0gMTUwMDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kZml2ZSA9IDE1MDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kZml2ZSA9IDE1MDAwMDtcbiAgICAgICAgICAgIHZtLnRob3VzYW5kc2V2ZW5maXZlID0gMTc1MDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kc2V2ZW5maXZlID0gMTc1MDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdGhvdXNhbmRzZXZlbmZpdmUgPSAxNzUwMDA7XG4gICAgICAgICAgICB2bS50aG91c2FuZGVpZ2h0ID0gMTgwMDtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kZWlnaHQgPSAxODAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0aG91c2FuZGVpZ2h0ID0gMTgwMDAwO1xuICAgICAgICAgICAgdm0udGhvdXNhbmRuaW5lID0gOTk5OTtcbiAgICAgICAgICAgIHZtLnRlbnRob3VzYW5kbmluZSA9IDk5OTk5O1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRob3VzYW5kbmluZSA9IDk5OTk5OTtcblxuICAgICAgICAgICAgdm0ubWlsbGlvbiA9IDEwMDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uID0gMTAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbiA9IDEwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLm1pbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDtcbiAgICAgICAgICAgIHZtLnRlbm1pbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDA7XG4gICAgICAgICAgICB2bS5taWxsaW9uZml2ZSA9IDE1MDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uZml2ZSA9IDE1MDAwMDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZG1pbGxpb25maXZlID0gMTUwMDAwMDAwO1xuICAgICAgICAgICAgdm0ubWlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkbWlsbGlvbnNldmVuZml2ZSA9IDE3NTAwMDAwMDtcbiAgICAgICAgICAgIHZtLm1pbGxpb25laWdodCA9IDE4MDAwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9uZWlnaHQgPSAxODAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRtaWxsaW9uZWlnaHQgPSAxODAwMDAwMDA7XG4gICAgICAgICAgICB2bS5taWxsaW9ubmluZSA9IDk5OTkwMDA7XG4gICAgICAgICAgICB2bS50ZW5taWxsaW9ubmluZSA9IDk5OTk5OTk5O1xuICAgICAgICAgICAgdm0uaHVuZHJlZG1pbGxpb25uaW5lID0gOTk5OTk5OTk5O1xuXG4gICAgICAgICAgICB2bS5iaWxsaW9uID0gMTAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb24gPSAxMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9uID0gMTAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uYmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwO1xuICAgICAgICAgICAgdm0udGVuYmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9udHdlbnR5Zml2ZSA9IDEyNTAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmJpbGxpb25maXZlID0gMTUwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25maXZlID0gMTUwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkYmlsbGlvbmZpdmUgPSAxNTAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5iaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWRiaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uYmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZGJpbGxpb25laWdodCA9IDE4MDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmJpbGxpb25uaW5lID0gOTk5OTAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbmJpbGxpb25uaW5lID0gOTk5OTk5OTkwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkYmlsbGlvbm5pbmUgPSA5OTk5OTk5OTkwMDA7XG5cbiAgICAgICAgICAgIHZtLnRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS50cmlsbGlvbnR3ZW50eWZpdmUgPSAxMjUwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udGVudHJpbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb250d2VudHlmaXZlID0gMTI1MDAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udHJpbGxpb25maXZlID0gMTUwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uZml2ZSA9IDE1MDAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRyaWxsaW9uZml2ZSA9IDE1MDAwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRyaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uc2V2ZW5maXZlID0gMTc1MDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS5odW5kcmVkdHJpbGxpb25zZXZlbmZpdmUgPSAxNzUwMDAwMDAwMDAwMDA7XG4gICAgICAgICAgICB2bS50cmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9uZWlnaHQgPSAxODAwMDAwMDAwMDAwMDtcbiAgICAgICAgICAgIHZtLmh1bmRyZWR0cmlsbGlvbmVpZ2h0ID0gMTgwMDAwMDAwMDAwMDAwO1xuICAgICAgICAgICAgdm0udHJpbGxpb25uaW5lID0gOTk5OTk5OTAwMDAwMDtcbiAgICAgICAgICAgIHZtLnRlbnRyaWxsaW9ubmluZSA9IDk5OTk5OTk5OTk5MDAwO1xuICAgICAgICAgICAgdm0uaHVuZHJlZHRyaWxsaW9ubmluZSA9IDk5OTk5OTk5OTk5OTAwMDtcbiAgICAgICAgfVxufSgpKTsiLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ2FwcCcpXG4gIC5maWx0ZXIoJ251bWJlckFiYnJldicsIG51bWJlckFiYnJldik7XG4gIGZ1bmN0aW9uIG51bWJlckFiYnJldigpIHtcbiAgICB2YXIgbGV0dGVyO1xuICAgIHJldHVybiBmdW5jdGlvbihudW0pIHtcbiAgICBcbiAgICAvLyBnaXZlIHRoZSBudW1iZXIgdGhlIGNvcnJlY3QgZGVzaWduYXRvciwgYmFzZWQgb24gaXRzIG9yaWdpbmFsIHZhbHVlIGFuZCB1cCAxMDB0aCB0cmlsbGlvblxuICAgIC8vIGllIDogMTAsMDAwID0gMTBLLCAxLDAwMCwwMDAgPSAxTSwgMSwwMDAsMDAwLDAwMCA9IDFCLCAxLDAwMCwwMDAsMDAwLDAwMCA9IDFUXG4gICAgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgNCkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDYpKXtcbiAgICAgICAgbGV0dGVyID0gJ0snO1xuICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgNikgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDkpKXtcbiAgICAgICAgbGV0dGVyID0gJ00nO1xuICAgICB9IGVsc2UgaWYgKG51bSA+PSBNYXRoLnBvdygxMCwgOSkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSl7XG4gICAgICAgIGxldHRlciA9ICdCJztcbiAgICAgfSBlbHNlIGlmIChudW0gPj0gTWF0aC5wb3coMTAsIDEyKSAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTUpKXtcbiAgICAgICAgbGV0dGVyID0gJ1QnO1xuICAgICB9IGVsc2Uge1xuICAgICAgICBsZXR0ZXIgPSAnJztcbiAgICAgICAgcmV0dXJuIG51bS50b0ZpeGVkKDApO1xuICAgICB9XG5cbiAgICAgIC8vIHBsYWNlIHRoZSBkZWNpbWFsIHBvaW50IGluIHRoZSBjb3JyZWN0IHNwb3RcbiAgICAgIC8vIHNvIGlmIHRoZSBudW1iZXIgaXMgXG4gICAgICAvLyAxLDI1Myw1MDIgPSAxLjNNXG4gICAgICAvLyAxMiw1NDIsNDIzID0gMTIuNU1cbiAgICAgIC8vIDEyNCw2MzQsMjQyID0gMTI1TVxuICAgICAgdmFyIHkgPSAwO1xuICAgICAgdmFyIHogPSAwO1xuICAgICAgdmFyIHggPSBcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIHdoaWxlKG51bSA8PSBNYXRoLnBvdygxMCwgaSkpIHtcbiAgICAgICAgICBpZiAobnVtID09PSBNYXRoLnBvdygxMCwgNCkgfHwgbnVtID09PSBNYXRoLnBvdygxMCwgNikgfHwgbnVtID09PSBNYXRoLnBvdygxMCwgOSkgfHwgbnVtID09PSBNYXRoLnBvdygxMCwgMTIpKSB7XG4gICAgICAgICAgICB5ID0gbnVtL01hdGgucG93KDEwLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA+IE1hdGgucG93KDEwLCA2KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDcpIHx8IG51bSA+IE1hdGgucG93KDEwLCA5KSAmJiBudW0gPD0gTWF0aC5wb3coMTAsIDEwKSB8fCBudW0gPiBNYXRoLnBvdygxMCwgMTIpICYmIG51bSA8PSBNYXRoLnBvdygxMCwgMTMpKSB7XG4gICAgICAgICAgICB5ID0gbnVtL01hdGgucG93KDEwLCBpIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChudW0gPiBNYXRoLnBvdygxMCwgNCkgJiYgbnVtIDw9IE1hdGgucG93KDEwLCA1KSB8fCBudW0gPiBNYXRoLnBvdygxMCwgNykgJiYgbnVtIDw9IE1hdGgucG93KDEwLCA4KSB8fCBudW0gPiBNYXRoLnBvdygxMCwgMTApICYmIG51bSA8PSBNYXRoLnBvdygxMCwgMTEpIHx8IG51bSA+IE1hdGgucG93KDEwLCAxMykgJiYgbnVtIDw9IE1hdGgucG93KDEwLCAxNCkpIHtcbiAgICAgICAgICAgIHkgPSBudW0vTWF0aC5wb3coMTAsIGkgLSAyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA+IE1hdGgucG93KDEwLCA1KSAmJiBudW0gPCBNYXRoLnBvdygxMCwgNikgfHwgbnVtID4gTWF0aC5wb3coMTAsIDgpICYmIG51bSA8IE1hdGgucG93KDEwLCA5KSB8fCBudW0gPiBNYXRoLnBvdygxMCwgMTEpICYmIG51bSA8ICBNYXRoLnBvdygxMCwgMTIpIHx8IG51bSA+IE1hdGgucG93KDEwLCAxNCkgJiYgbnVtIDw9IE1hdGgucG93KDEwLCAxNSkpIHtcbiAgICAgICAgICAgIHkgPSBudW0vTWF0aC5wb3coMTAsIGkgLSAzKTtcbiAgICAgICAgICB9ICAgXG5cbiAgICAgICAgICAvLyB0aG91c2FuZHMgcm91bmRpbmcgdXAgdG8gbWlsbGlvbnMgXG5cbiAgICAgICAgICBpZiAobnVtID49IDk5OTk5ICYmIG51bSA8IE1hdGgucG93KDEwLCA1KSkge1xuICAgICAgICAgICAgeiA9IG51bS9NYXRoLnBvdygxMCwgaSAtIDIpO1xuICAgICAgICAgICAgbGV0dGVyID0gJ0snO1xuICAgICAgICAgICAgcmV0dXJuIHoudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk5OTkgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDYpKSB7XG4gICAgICAgICAgICB6ID0gbnVtL01hdGgucG93KDEwLCBpICk7XG4gICAgICAgICAgICBsZXR0ZXIgPSAnTSc7XG4gICAgICAgICAgICByZXR1cm4gei50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gbWlsbGlvbiByb3VuZGluZyB1cCB0byBiaWxsaW9uc1xuICAgICAgICAgIGlmIChudW0gPj0gOTk5OTAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgNykpIHtcbiAgICAgICAgICAgIHogPSBudW0vTWF0aC5wb3coMTAsIGkgLSAxKTtcbiAgICAgICAgICAgIGxldHRlciA9ICdNJztcbiAgICAgICAgICAgIHJldHVybiB6LnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChudW0gPj0gOTk5OTkwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDgpKSB7XG4gICAgICAgICAgICB6ID0gbnVtL01hdGgucG93KDEwLCBpIC0gMik7XG4gICAgICAgICAgICBsZXR0ZXIgPSAnTSc7XG4gICAgICAgICAgICByZXR1cm4gei50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobnVtID49IDk5OTk5OTAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgOSkpIHtcbiAgICAgICAgICAgIHogPSBudW0vTWF0aC5wb3coMTAsIGkpO1xuICAgICAgICAgICAgbGV0dGVyID0gJ0InO1xuICAgICAgICAgICAgcmV0dXJuIHoudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgLy8gYmlsbGlvbnMgcm91bmRpbmcgdXAgdG8gdHJpbGxpb25zXG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk5MDAwMDAwICYmIG51bSA8IE1hdGgucG93KDEwLCAxMCkpIHtcbiAgICAgICAgICAgIHogPSBudW0vTWF0aC5wb3coMTAsIGkgLSAxKTtcbiAgICAgICAgICAgIGxldHRlciA9ICdCJztcbiAgICAgICAgICAgIHJldHVybiB6LnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChudW0gPj0gOTk5OTkwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDExKSkge1xuICAgICAgICAgICAgeiA9IG51bS9NYXRoLnBvdygxMCwgaSAtIDIpO1xuICAgICAgICAgICAgbGV0dGVyID0gJ0InO1xuICAgICAgICAgICAgcmV0dXJuIHoudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk5OTkwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEyKSkge1xuICAgICAgICAgICAgeiA9IG51bS9NYXRoLnBvdygxMCwgaSk7XG4gICAgICAgICAgICBsZXR0ZXIgPSAnVCc7XG4gICAgICAgICAgICByZXR1cm4gei50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRyaWxsaW9ucyByb3VuZGluZyB1cCB0byBxdWFkcmlsbGlvbnNcbiAgICAgICAgICBpZiAobnVtID49IDk5OTk5OTkwMDAwMDAgJiYgbnVtIDwgTWF0aC5wb3coMTAsIDEzKSkge1xuICAgICAgICAgICAgeiA9IG51bS9NYXRoLnBvdygxMCwgaSAtIDEpO1xuICAgICAgICAgICAgbGV0dGVyID0gJ1QnO1xuICAgICAgICAgICAgcmV0dXJuIHoudG9GaXhlZCgwKSArIGxldHRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG51bSA+PSA5OTk5OTk5OTAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTQpKSB7XG4gICAgICAgICAgICB6ID0gbnVtL01hdGgucG93KDEwLCBpIC0gMik7XG4gICAgICAgICAgICBsZXR0ZXIgPSAnVCc7XG4gICAgICAgICAgICByZXR1cm4gei50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobnVtID49IDk5OTk5OTk5OTAwMDAwMCAmJiBudW0gPCBNYXRoLnBvdygxMCwgMTUpKSB7XG4gICAgICAgICAgICB6ID0gbnVtL01hdGgucG93KDEwLCBpKTtcbiAgICAgICAgICAgIGxldHRlciA9ICdRJztcbiAgICAgICAgICAgIHJldHVybiB6LnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIHggPSB5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHgudG9TdHJpbmcoKS5jaGFyQXQoMSkgPT09IFwiLlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHgpLnRvRml4ZWQoMikgKyBsZXR0ZXI7XG4gICAgICAgICAgfSBlbHNlIGlmICh4LnRvU3RyaW5nKCkuY2hhckF0KDIpID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih4KS50b0ZpeGVkKDEpICsgbGV0dGVyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoeC5jaGFyQXQoMykgPT09IFwiLlwiICYmIHggPiBcIjFcIikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih4KS50b0ZpeGVkKDApICsgbGV0dGVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHgpLnRvRml4ZWQoMCkgKyBsZXR0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9