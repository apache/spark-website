---
layout: global
type: "page"
title: Spark Structured Streaming
description: Spark Structured Streaming makes it easy to build streaming applications and pipelines with the same and familiar Spark APIs.
subproject: Streaming
---


[Spark Structured Streaming]({{site.baseurl}}/docs/latest/structured-streaming-programming-guide.html) makes it easy to build streaming applications and pipelines with the same and familiar Spark APIs.

Spark Structured Streaming has two different modes:

- **Spark Real-time Mode (RTM):** Designed for sub-second, operational workloads. RTM provides continuous, millisecond-level processing that is up to 100x faster than micro-batch mode, eliminating the need to maintain a separate real-time engine.
- **Spark Micro-batch Mode:** Designed for analytical pipelines and ETL. Micro-batch mode processes data streams as a series of small batch jobs, a highly cost-effective option for second- or minute-level latencies.

Both modes share the exact same codebase, so you can shift between cost-effective ETL and sub-second operational streaming with a single configuration change.

## Easy to use

Spark Structured Streaming abstracts away complex streaming concepts such as incremental processing, checkpointing, and watermarks so you can build streaming applications without learning new tools. Shifting from minute-level ETL to millisecond-scale operational streaming requires only a change to your trigger.

**Micro-batch mode** &mdash; second- or minute-level latency for analytical ETL:

<div style="margin-top: 15px; text-align: left; display: inline-block;">
  <div class="code">
    spark<br/>
    &nbsp;&nbsp;.<span class="sparkop">readStream</span><br/>
    &nbsp;&nbsp;.<span class="sparkop">select</span>(<span class="closure">$"value"</span>.cast(<span class="closure">"string"</span>).alias(<span class="closure">"jsonData"</span>))<br/>
    &nbsp;&nbsp;.<span class="sparkop">select</span>(from_json(<span class="closure">$"jsonData"</span>, jsonSchema).alias(<span class="closure">"payload"</span>))<br/>
    &nbsp;&nbsp;.<span class="sparkop">writeStream</span><br/>
    &nbsp;&nbsp;.<span class="sparkop">trigger</span>(Trigger.<span class="sparkop">ProcessingTime</span>(<span class="closure">"1 minute"</span>))<br/>
    &nbsp;&nbsp;.<span class="sparkop">start</span>()
  </div>
</div>

**Real-time Mode** &mdash; millisecond-scale latency for operational workloads. Switch the trigger (the output mode must be `update`); the rest of the query is unchanged:

<div style="margin-top: 15px; text-align: left; display: inline-block;">
  <div class="code">
    spark<br/>
    &nbsp;&nbsp;.<span class="sparkop">readStream</span><br/>
    &nbsp;&nbsp;.<span class="sparkop">select</span>(<span class="closure">$"value"</span>.cast(<span class="closure">"string"</span>).alias(<span class="closure">"jsonData"</span>))<br/>
    &nbsp;&nbsp;.<span class="sparkop">select</span>(from_json(<span class="closure">$"jsonData"</span>, jsonSchema).alias(<span class="closure">"payload"</span>))<br/>
    &nbsp;&nbsp;.<span class="sparkop">writeStream</span><br/>
    &nbsp;&nbsp;.<span class="sparkop">outputMode</span>(<span class="closure">"update"</span>)<br/>
    &nbsp;&nbsp;.<span class="sparkop">trigger</span>(Trigger.<span class="sparkop">RealTime</span>(<span class="closure">"5 minutes"</span>))<br/>
    &nbsp;&nbsp;.<span class="sparkop">start</span>()
  </div>
</div>

## Unified batch and streaming APIs

Spark Structured Streaming provides the same structured APIs (DataFrames and Datasets) as Spark, so you don't need to develop on or maintain two different technology stacks for batch and streaming. The same codebase scales from historical batch processing to real-time inference, and unified APIs make it easy to migrate existing batch Spark jobs to streaming.

![]({{site.baseurl}}/images/spark-unified-batch-and-streaming.png)

## Built for both analytical and operational workloads

Run cost-effective ETL and sub-second operational applications on the same engine. Spark Structured Streaming supports both micro-batch and Real-time execution, so you can change latency targets with a single-line trigger configuration.

- **Operational streaming (Spark Real-time Mode):** A continuous processing architecture that executes events as they arrive. Real-time Mode is up to 100x faster than micro-batch for operational streaming workloads, dropping end-to-end latency to as low as a few milliseconds, enabling inline fraud detection, live personalization, and real-time alerting without a separate streaming engine.
- **Analytical streaming (Spark Micro-batch Mode):** This model balances high throughput with cost-efficiency. Use it for traditional ETL, Medallion architectures, and ingestion pipelines where latency is measured in seconds or minutes.

## Low latency and cost-effective

Spark Structured Streaming uses the same underlying architecture as Spark, so you can take advantage of all the performance and cost optimizations built into the Spark engine. While micro-batch execution provides highly cost-effective processing for analytical ETL, Real-time Mode uses continuous processing with pipelined and streaming shuffles to reach P99 latencies ranging from a few milliseconds to around 300 ms depending on the workload. Run mission-critical operational workloads with ultra-low latency without sacrificing exactly-once guarantees.

![]({{site.baseurl}}/images/spark-structured-streaming-incremental-execution.png)



### Getting started

To get started with Spark Structured Streaming:

- [Download Spark]({{site.baseurl}}/downloads.html). It includes Structured Streaming as a module.
- Read the [Spark Structured Streaming programming guide]({{site.baseurl}}/docs/latest/structured-streaming-programming-guide.html), which includes programming models, tutorials, configurations, etc.

### Community

Spark Structured Streaming is developed as part of Apache Spark. It thus gets tested and updated with each Spark release.

If you have questions about the system, ask on the [Spark mailing lists]({{site.baseurl}}/community.html#mailing-lists).

The Spark Structured Streaming developers welcome contributions. If you'd like to help out, read [how to contribute to Spark]({{site.baseurl}}/contributing.html), and send us a patch!



[Download Apache Spark]({{site.baseurl}}/downloads.html)  
[Includes Spark Structured Streaming]({{site.baseurl}}/downloads.html)
