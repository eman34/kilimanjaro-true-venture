#!/usr/bin/env bash
# PostToolUse hook: runs `npm run typecheck` after edits to TS/TSX files.
# Reads the tool payload as JSON on stdin and exits 0 either way so the
# edit is never undone — output (if any) is surfaced as a system message.

set -uo pipefail

# Extract the edited file path from the tool payload on stdin.
file=$(jq -r '.tool_input.file_path // empty' 2>/dev/null)

# Only react to TypeScript edits.
case "$file" in
  *.ts|*.tsx) ;;
  *) exit 0 ;;
esac

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

# Run typecheck. If it fails, surface the first ~30 lines of output so
# the calling Claude sees the errors and can fix forward.
output=$(npm run --silent typecheck 2>&1)
status=$?

if [ $status -ne 0 ]; then
  echo "[typecheck hook] TypeScript errors after edit to $file:"
  echo "$output" | head -30
fi

exit 0
