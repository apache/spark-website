..  Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

..    http://www.apache.org/licenses/LICENSE-2.0

..  Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.


DistributedLDAModel
=========================================

.. currentmodule:: pyspark.ml.clustering

.. autoclass:: DistributedLDAModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~DistributedLDAModel.clear
       ~DistributedLDAModel.copy
       ~DistributedLDAModel.describeTopics
       ~DistributedLDAModel.estimatedDocConcentration
       ~DistributedLDAModel.explainParam
       ~DistributedLDAModel.explainParams
       ~DistributedLDAModel.extractParamMap
       ~DistributedLDAModel.getCheckpointFiles
       ~DistributedLDAModel.getCheckpointInterval
       ~DistributedLDAModel.getDocConcentration
       ~DistributedLDAModel.getFeaturesCol
       ~DistributedLDAModel.getK
       ~DistributedLDAModel.getKeepLastCheckpoint
       ~DistributedLDAModel.getLearningDecay
       ~DistributedLDAModel.getLearningOffset
       ~DistributedLDAModel.getMaxIter
       ~DistributedLDAModel.getOptimizeDocConcentration
       ~DistributedLDAModel.getOptimizer
       ~DistributedLDAModel.getOrDefault
       ~DistributedLDAModel.getParam
       ~DistributedLDAModel.getSeed
       ~DistributedLDAModel.getSubsamplingRate
       ~DistributedLDAModel.getTopicConcentration
       ~DistributedLDAModel.getTopicDistributionCol
       ~DistributedLDAModel.hasDefault
       ~DistributedLDAModel.hasParam
       ~DistributedLDAModel.isDefined
       ~DistributedLDAModel.isDistributed
       ~DistributedLDAModel.isSet
       ~DistributedLDAModel.load
       ~DistributedLDAModel.logLikelihood
       ~DistributedLDAModel.logPerplexity
       ~DistributedLDAModel.logPrior
       ~DistributedLDAModel.read
       ~DistributedLDAModel.save
       ~DistributedLDAModel.set
       ~DistributedLDAModel.setFeaturesCol
       ~DistributedLDAModel.setSeed
       ~DistributedLDAModel.setTopicDistributionCol
       ~DistributedLDAModel.toLocal
       ~DistributedLDAModel.topicsMatrix
       ~DistributedLDAModel.trainingLogLikelihood
       ~DistributedLDAModel.transform
       ~DistributedLDAModel.vocabSize
       ~DistributedLDAModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~DistributedLDAModel.checkpointInterval
       ~DistributedLDAModel.docConcentration
       ~DistributedLDAModel.featuresCol
       ~DistributedLDAModel.k
       ~DistributedLDAModel.keepLastCheckpoint
       ~DistributedLDAModel.learningDecay
       ~DistributedLDAModel.learningOffset
       ~DistributedLDAModel.maxIter
       ~DistributedLDAModel.optimizeDocConcentration
       ~DistributedLDAModel.optimizer
       ~DistributedLDAModel.params
       ~DistributedLDAModel.seed
       ~DistributedLDAModel.subsamplingRate
       ~DistributedLDAModel.topicConcentration
       ~DistributedLDAModel.topicDistributionCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: describeTopics
    .. automethod:: estimatedDocConcentration
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getCheckpointFiles
    .. automethod:: getCheckpointInterval
    .. automethod:: getDocConcentration
    .. automethod:: getFeaturesCol
    .. automethod:: getK
    .. automethod:: getKeepLastCheckpoint
    .. automethod:: getLearningDecay
    .. automethod:: getLearningOffset
    .. automethod:: getMaxIter
    .. automethod:: getOptimizeDocConcentration
    .. automethod:: getOptimizer
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getSeed
    .. automethod:: getSubsamplingRate
    .. automethod:: getTopicConcentration
    .. automethod:: getTopicDistributionCol
    .. automethod:: hasDefault
    .. automethod:: hasParam
    .. automethod:: isDefined
    .. automethod:: isDistributed
    .. automethod:: isSet
    .. automethod:: load
    .. automethod:: logLikelihood
    .. automethod:: logPerplexity
    .. automethod:: logPrior
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setFeaturesCol
    .. automethod:: setSeed
    .. automethod:: setTopicDistributionCol
    .. automethod:: toLocal
    .. automethod:: topicsMatrix
    .. automethod:: trainingLogLikelihood
    .. automethod:: transform
    .. automethod:: vocabSize
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: checkpointInterval
    .. autoattribute:: docConcentration
    .. autoattribute:: featuresCol
    .. autoattribute:: k
    .. autoattribute:: keepLastCheckpoint
    .. autoattribute:: learningDecay
    .. autoattribute:: learningOffset
    .. autoattribute:: maxIter
    .. autoattribute:: optimizeDocConcentration
    .. autoattribute:: optimizer
    .. autoattribute:: params
    .. autoattribute:: seed
    .. autoattribute:: subsamplingRate
    .. autoattribute:: topicConcentration
    .. autoattribute:: topicDistributionCol

    
    
