// 前面已經宣告的函式可以這樣輸出
const Service = {
  gotData: (target, setRef) => {
    fetch(target)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        setRef.value = json;
      })
      .catch(function () {
        console.log(this);
      });
  },
};
// export { gotData };

// 輸出常數
// export const foo = Math.sqrt(2);
