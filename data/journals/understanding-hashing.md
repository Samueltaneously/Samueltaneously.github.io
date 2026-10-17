---

title: "Trying to Understand Hashing" date: "2026-10-15" excerpt: "I've been learning about SHA-256, what hashing actually does, and why it's different from encryption." tags:

- Security
- Learning

---

## Hashing is not encryption

I've been spending some time learning about SHA-256, and one of the first things I had to get straight was the difference between hashing and encryption.

I initially thought they were basically the same thing. Both take some input and transform it into something that looks completely different, right?

But there's an important distinction.

Encryption is designed to be reversible with the right key. Hashing is designed to produce a fixed-size fingerprint of some input, without a practical way to recover the original data from the hash.

That distinction turns out to matter quite a bit.

## A small experiment

I started experimenting with SHA-256 to see what happens when I hash different strings.

Even a tiny change to the input produces a completely different-looking output. Hashing `hello` and `Hello`, for example, gives you two different results.

That property makes hashes useful for checking data integrity. If a file changes, its hash should change too.

It was a good reminder that sometimes the most useful way to understand a concept is to stop reading about it and actually try it.

## Where it gets interesting

I also learned that hashing isn't automatically secure just because the algorithm is strong.

For example, passwords shouldn't simply be stored as SHA-256 hashes. Password storage needs dedicated password-hashing algorithms such as Argon2id, bcrypt, or scrypt, which are designed to make guessing attacks more expensive.

There's more nuance here than I expected, and that's what I enjoy about learning security. Every answer seems to uncover another question.

## What I'm taking away

I'm trying to get better at understanding not just how a tool works, but why it was designed that way and where its limitations are.

Hashing seemed like a small topic at first. It ended up being a useful introduction to thinking more carefully about security.
