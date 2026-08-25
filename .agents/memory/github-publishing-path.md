---
name: GitHub publishing path
description: Reliable publishing approach when the repository's shell HTTPS credentials reject GitHub pushes.
---

Use the installed GitHub connection and Git Data API when a normal shell push fails authentication. Create blobs for changed tracked files, build a tree from the current remote tree, create a commit, then advance `refs/heads/main` without force.

**Why:** The configured HTTPS remote can read public refs but its stored shell credential is rejected for pushes. The Replit GitHub connection remains authorized for repository writes.

**How to apply:** Compare tracked blob SHAs with the remote recursive tree, upload only changed blobs, create one non-force commit on the current remote head, and monitor the `Workers Builds: kellysroofing` check before verifying the live domain.