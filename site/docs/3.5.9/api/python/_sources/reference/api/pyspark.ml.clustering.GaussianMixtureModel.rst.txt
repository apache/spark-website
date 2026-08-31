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


GaussianMixtureModel
==========================================

.. currentmodule:: pyspark.ml.clustering

.. autoclass:: GaussianMixtureModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~GaussianMixtureModel.clear
       ~GaussianMixtureModel.copy
       ~GaussianMixtureModel.explainParam
       ~GaussianMixtureModel.explainParams
       ~GaussianMixtureModel.extractParamMap
       ~GaussianMixtureModel.getAggregationDepth
       ~GaussianMixtureModel.getFeaturesCol
       ~GaussianMixtureModel.getK
       ~GaussianMixtureModel.getMaxIter
       ~GaussianMixtureModel.getOrDefault
       ~GaussianMixtureModel.getParam
       ~GaussianMixtureModel.getPredictionCol
       ~GaussianMixtureModel.getProbabilityCol
       ~GaussianMixtureModel.getSeed
       ~GaussianMixtureModel.getTol
       ~GaussianMixtureModel.getWeightCol
       ~GaussianMixtureModel.hasDefault
       ~GaussianMixtureModel.hasParam
       ~GaussianMixtureModel.isDefined
       ~GaussianMixtureModel.isSet
       ~GaussianMixtureModel.load
       ~GaussianMixtureModel.predict
       ~GaussianMixtureModel.predictProbability
       ~GaussianMixtureModel.read
       ~GaussianMixtureModel.save
       ~GaussianMixtureModel.set
       ~GaussianMixtureModel.setFeaturesCol
       ~GaussianMixtureModel.setPredictionCol
       ~GaussianMixtureModel.setProbabilityCol
       ~GaussianMixtureModel.transform
       ~GaussianMixtureModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~GaussianMixtureModel.aggregationDepth
       ~GaussianMixtureModel.featuresCol
       ~GaussianMixtureModel.gaussians
       ~GaussianMixtureModel.gaussiansDF
       ~GaussianMixtureModel.hasSummary
       ~GaussianMixtureModel.k
       ~GaussianMixtureModel.maxIter
       ~GaussianMixtureModel.params
       ~GaussianMixtureModel.predictionCol
       ~GaussianMixtureModel.probabilityCol
       ~GaussianMixtureModel.seed
       ~GaussianMixtureModel.summary
       ~GaussianMixtureModel.tol
       ~GaussianMixtureModel.weightCol
       ~GaussianMixtureModel.weights

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getAggregationDepth
    .. automethod:: getFeaturesCol
    .. automethod:: getK
    .. automethod:: getMaxIter
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getPredictionCol
    .. automethod:: getProbabilityCol
    .. automethod:: getSeed
    .. automethod:: getTol
    .. automethod:: getWeightCol
    .. automethod:: hasDefault
    .. automethod:: hasParam
    .. automethod:: isDefined
    .. automethod:: isSet
    .. automethod:: load
    .. automethod:: predict
    .. automethod:: predictProbability
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setFeaturesCol
    .. automethod:: setPredictionCol
    .. automethod:: setProbabilityCol
    .. automethod:: transform
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: aggregationDepth
    .. autoattribute:: featuresCol
    .. autoattribute:: gaussians
    .. autoattribute:: gaussiansDF
    .. autoattribute:: hasSummary
    .. autoattribute:: k
    .. autoattribute:: maxIter
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: probabilityCol
    .. autoattribute:: seed
    .. autoattribute:: summary
    .. autoattribute:: tol
    .. autoattribute:: weightCol
    .. autoattribute:: weights

    
    
