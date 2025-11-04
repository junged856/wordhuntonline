class TrieNode {
	private children: Map<string, TrieNode> = new Map<string, TrieNode>();
	public isEndOfWord: boolean = false;

	public getChild(letter: string) {
		return this.children.get(letter);
	}

	public addChild(letter: string) {
		let new_child = new TrieNode();
		if (this.getChild(letter) === undefined) {
			this.children.set(letter, new_child);
		}

		return new_child;
	}

	public hasChildren() {
		return this.children.size !== 0;
	}

	public getChildrenEntries() {
		return this.children.entries();
	}
}

class Trie {
	private head: TrieNode;

	constructor() {
		this.head = new TrieNode();
	}

	// add a word
	public insert_word(word: string) {
		let current = this.head; // keep track of node we are currently at

		for (const letter of word) {
			let child = current.getChild(letter);
			if (child !== undefined) {
				current = child;
			} else {
				current = current.addChild(letter);
			}
		}

		current.isEndOfWord = true;
	}

	// gets node in tree corresponding to string
	public search(s: string) {
		let current = this.head;
		for (const letter of s) {
			let child = current.getChild(letter);
			if (child !== undefined) {
				current = child;
			} else {
				return null;
			}
		}
		return current;
	}

	// return whether string is a prefix
	public is_prefix(prefix: string) {
		let prefix_node = this.search(prefix);
		if (prefix_node !== null) {
			return prefix_node.hasChildren();
		} else {
			return false;
		}
	}

	// get all words with a prefix: NEEDS FIXING
	public get_all_prefix_words(prefix: string, words: string[] = []) {
		let prefix_node = this.search(prefix);
		if (prefix_node !== null) {
			if (prefix_node.isEndOfWord) {
				words.push(prefix);
			}
			for (const [letter, node] of prefix_node.getChildrenEntries()) {
				this.get_all_prefix_words(prefix + letter, words);
			}
		}
	}

	// check if word is in dictionary
	public is_word(s: string) {
		let trie_node = this.search(s);
		return trie_node != null && trie_node.isEndOfWord;
	}
}
