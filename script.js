new Vue({
  el: '#app',
  data: {
      inputString: '',
      permutations: []
  },
  methods: {
      generatePermutations() {
          if (!this.inputString) {
              alert('文字を入力してください。');
              return;
          }
          // 文章として最初の文字に不適な文字（例：「ん」）を省く
          const invalidFirstCharacters = ['ん', 'ン', 'ゃ', 'ャ', 'ゅ', 'ュ', 'ょ', 'ョ', 'っ', 'ッ', 'ぁ', 'ァ', 'ぃ', 'ィ', 'ぅ', 'ゥ', 'ぇ', 'ェ', 'ぉ', 'ォ']; // 不適な文字を追加できる
          this.permutations = Array.from(
              new Set(this.permute(this.inputString.split('')))
          ).filter(perm => !invalidFirstCharacters.includes(perm.charAt(0)));
      },
      permute(arr) {
          if (arr.length === 1) return [arr.join('')];

          const result = [];
          for (let i = 0; i < arr.length; i++) {
              const current = arr[i];
              const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
              const remainingPerms = this.permute(remaining);
              for (const perm of remainingPerms) {
                  result.push(current + perm);
              }
          }
          return result;
      }
  }
});
