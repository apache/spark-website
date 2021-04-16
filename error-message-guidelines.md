---
layout: global
title: Error message guidelines
type: "page singular"
navigation:
  weight: 5
  show: true
---

## Error Message Guidelines

This guide is a reference for composing standardized and actionable
error messages in Apache Spark.

### Include What, Why, and How

Exceptions thrown from Spark should answer the Five W's and How:

-   **Who** encountered the problem?
-   **What** was the problem?
-   **When** did the problem happen?
-   **Why** did the problem happen?
-   **How** can the problem be solved?

The context provided by exceptions can help answer **who** (usually the
user), **when** (usually included in the log via <code>log4j</code>), and **where**
(usually included in the stack trace). However, these answers alone are
often insufficient for the user to solve the problem. An error message
that answers the remaining questions
--- **what**, **why**, and **how** --- minimizes user frustration.

#### Explicitly answer What, Why and How

In many cases, the error message should explicitly answer **what**,
**why**, and **how**.

##### Example 1

<code style="white-space:normal">
  <a href="https://github.com/apache/spark/blob/569fb133d09e24e4ed56ed7efff641512d98b01b/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L160">
    Unable to generate an encoder for inner class {} without access to the
    scope that this class was defined in. Try moving this class out of its
    parent class.
  </a>
</code>

-   **What:** Unable to generate encoder inner class.
-   **Why:** Did not have access to the scope that the class was defined
    in.
-   **How:** Try moving this class out of its parent class.

##### Example 2

If the proposed fix (**how**) feels arbitrary, providing an explanation
for **why** the error occurred can reduce user frustration.

<code style="white-space:normal">
  <a href="https://github.com/apache/spark/blob/03dd33cc982ebb3de4354274ac49da31521b8195/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L498">
    <span style="background-color: #ffcccc">Unsupported</span> function name {}.
  </a>
</code>

-   **What:** Unsupported function name.
-   **Why:** Unclear.
-   **How:** Unclear.

**After**

*Function name {} <span style="background-color: #ccffcc">is invalid. Temporary functions cannot belong to a
catalog. Specify a function name with one or two parts.</span>*

-   **What:** Invalid function name.
-   **Why:** Temporary functions cannot belong to a catalog.
-   **How:** Specify a function name with one or two parts.

#### Implicitly answer How

Not all error messages should be this verbose. Sometimes, explicitly
explaining **how** to resolve the problem would be redundant.

##### Example 1

<code style="white-space:normal">
  <a href="https://github.com/apache/spark/blob/e5d972e84e973d9a2e62312dc471df30c35269bc/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L63">
    Invalid pivot column {}. Pivot columns must be comparable.
  </a>
</code>

-   **What:** Invalid pivot column.
-   **Why:** Pivot columns must be comparable.
-   **How (*****implied by Why*****):** Use comparable pivot columns.

##### Example 2

**Before**

<code style="white-space:normal">
  <a href="https://github.com/apache/spark/blob/9809a2f1c5187205c81542dbdc84b71db535f6e1/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L325">
    Cannot specify window frame for {} function
  </a>
</code>

-   **What:** Cannot specify window frame for the function.
-   **Why**: Unclear.
-   **How:** Unclear.

**After**

<code style="white-space:normal">
  Cannot specify frame for window expression {}. <span style="background-color: #ccffcc">Window expression
  contains mismatch between function frame {} and specification frame {}.</span>
</code>

-   **What:** Cannot specify the frame for the window expression.
-   **Why:** Window expression contains mismatch between function frame
    and specification frame.
-   **How (*****implied by Why*****):** Match the function frame and
    specification frame.

##### Example 3

**Before**

<code style="white-space:normal">
  <a href="https://github.com/apache/spark/blob/aff6c0febb40d9713895ba00d8c77ba00f04bd16/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryExecutionErrors.scala#L93">
    Cannot parse any decimal.
  </a>
</code>

-   **What:** Cannot parse decimal.
-   **Why**: Unclear.
-   **How:** Unclear.

**After**

<code style="white-space:normal">
  Invalid decimal {}; <span style="background-color: #ccffcc">encountered error while parsing at position {}.</span>
</code>

-   **What:** Invalid decimal.
-   **Why**: The decimal parser encountered an error at the specified
    position.
-   **How (*****implied by Why*****):** Fix the error at the specified position.

#### Implicitly answer Why and How

Sometimes, even explicitly explaining **why** the problem happened would
be redundant.

<code style="white-space:normal">
  <a href="https://github.com/apache/spark/blob/569fb133d09e24e4ed56ed7efff641512d98b01b/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L770">
    Path does not exist: {}
  </a>
</code>

-   **What:** Path does not exist.
-   **Why (*****implied by What*****):** User specified an invalid path.
-   **How (*****implied by What*****):** Use a different path.

### Use clear language

#### Diction guide

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Phrases</th>
      <th scope="col">When to use</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Unsupported</th>
      <td>
        The user may reasonably assume that the operation is supported, but it is not. This error may go away in the future if developers add support for the operation.
      </td>
      <td>
        <code style="white-space:normal">
          Data type {} is <span style="background-color: #ccffff">unsupported</span>.
        </code>
      </td>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">
        Invalid / Not allowed / Unexpected
      </th>
      <td rowspan="3">
        The user made a mistake when specifying an operation. The message should inform the user of how to resolve the error.
      </td>
      <td>
        <code style="white-space:normal">
          Array has size {}, index {} is <span style="background-color: #ccffff">invalid</span>.
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code style="white-space:normal">
          Found {} generators for the clause {}. Only one generator is <span style="background-color: #ccffff">allowed</span>.
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code style="white-space:normal">
          Found an <span style="background-color: #ccffff">unexpected</span> state format version {}. Expected versions 1 or 2.
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Failed to</th>
      <td>
        The system encountered an unexpected error that cannot be reasonably attributed to user error.
      </td>
      <td>
        <code style="white-space:normal">
          <span style="background-color: #ccffff">Failed to</span> compile {}.
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Cannot</th>
      <td>
        Any time, preferably only if one of the above alternatives does not apply.
      </td>
      <td>
        <code style="white-space:normal">
          <span style="background-color: #ccffff">Cannot</span> generate code for unsupported type {}.
        </code>
      </td>
    </tr>
  </tbody>
</table>

#### Wording guide

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Best practice</th>
      <th scope="col">Before</th>
      <th scope="col">After</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        Use active voice
      </th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/73857cdd87757d2888bd92f6b7c2fad709701484/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L704">
            DataType {} is <span style="background-color: #ffcccc">not supported by</span> {}.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal">
          {} <span style="background-color: #ccffcc">does not</span> support datatype {}.
        </code>
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">
        Avoid time-based statements, such as promises of future support
      </th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/27bec91bc971b393bd91f2ec8c6483b33f844f12/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L185">
            Pandas UDF aggregate expressions are <span style="background-color: #ffcccc">currently</span> not supported in pivot.
          </a>
        </code>
      </td> 
      <td>
        <code style="white-space:normal">
          Pivot <span style="background-color: #ccffcc">does not</span> support Pandas UDF aggregate expressions.
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/569fb133d09e24e4ed56ed7efff641512d98b01b/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L1076">
            Parquet type not <span style="background-color: #ffcccc">yet</span> supported: {}.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal">
          {} <span style="background-color: #ccffcc">does not</span> support Parquet type.
        </code>
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Use the present tense to describe the error and provide suggestions</th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/9809a2f1c5187205c81542dbdc84b71db535f6e1/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L166">
            <span style="background-color: #ffcccc">Couldn't</span> find the reference column for {} at {}.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal"><span style="background-color: #ccffcc">Cannot</span> find the reference column for {} at {}.</code>
      </td>
    </tr>
    <tr>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/9809a2f1c5187205c81542dbdc84b71db535f6e1/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L409">
            Join strategy hint parameter <span style="background-color: #ffcccc">should be</span> an identifier or string but was {}.
          </a>
        </code>
       </td> 
      <td>
        <code style="white-space:normal">
          Cannot use join strategy hint parameter {}. <span style="background-color: #ccffcc">Use</span> a table name or identifier to specify the parameter.
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Provide concrete examples</th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/569fb133d09e24e4ed56ed7efff641512d98b01b/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L422">
            {} Hint expects a partition number as a parameter.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal">
          {} Hint expects a partition number as a parameter. <span style="background-color: #ccffcc">For example, specify 3 partitions with {}(3)</span>.
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Avoid sounding accusatory, judgmental, or insulting</th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/569fb133d09e24e4ed56ed7efff641512d98b01b/core/src/main/scala/org/apache/spark/resource/ResourceUtils.scala#L143">
            <span style="background-color: #ffcccc">You must</span> specify an amount for {}.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal">
          {} cannot be empty. Specify an amount for {}.
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Be direct</th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/4b5fc1da752ec008468ef80a5717c8beab468387/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L119">
           LEGACY store assignment policy is disallowed in Spark data source V2. <span style="background-color: #ffcccc">Please</span> set the configuration spark.sql.storeAssignmentPolicy to <span style="background-color: #ffcccc">other values</span>.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal">
          Spark data source V2 does not allow the LEGACY store assignment policy. Set the configuration spark.sql.storeAssignment to ANSI or STRICT.
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Use human-readable text for user-facing errors</th>
      <td>
        <code style="white-space:normal">
          <a href="https://github.com/apache/spark/blob/4b5fc1da752ec008468ef80a5717c8beab468387/sql/catalyst/src/main/scala/org/apache/spark/sql/errors/QueryCompilationErrors.scala#L583">
            RENAME TABLE source and destination databases do not match: '{}' <span style="background-color: #ffcccc">!=</span> '{}'.
          </a>
        </code>
      </td>
      <td>
        <code style="white-space:normal">
          RENAME TABLE source and destination databases do not match. The source database is {}, but the destination database is {}.
        </code>
      </td>
    </tr>
  </tbody>
</table>
