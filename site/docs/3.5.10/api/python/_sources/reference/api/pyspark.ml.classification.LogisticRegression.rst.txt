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


LogisticRegression
============================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: LogisticRegression

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~LogisticRegression.clear
       ~LogisticRegression.copy
       ~LogisticRegression.explainParam
       ~LogisticRegression.explainParams
       ~LogisticRegression.extractParamMap
       ~LogisticRegression.fit
       ~LogisticRegression.fitMultiple
       ~LogisticRegression.getAggregationDepth
       ~LogisticRegression.getElasticNetParam
       ~LogisticRegression.getFamily
       ~LogisticRegression.getFeaturesCol
       ~LogisticRegression.getFitIntercept
       ~LogisticRegression.getLabelCol
       ~LogisticRegression.getLowerBoundsOnCoefficients
       ~LogisticRegression.getLowerBoundsOnIntercepts
       ~LogisticRegression.getMaxBlockSizeInMB
       ~LogisticRegression.getMaxIter
       ~LogisticRegression.getOrDefault
       ~LogisticRegression.getParam
       ~LogisticRegression.getPredictionCol
       ~LogisticRegression.getProbabilityCol
       ~LogisticRegression.getRawPredictionCol
       ~LogisticRegression.getRegParam
       ~LogisticRegression.getStandardization
       ~LogisticRegression.getThreshold
       ~LogisticRegression.getThresholds
       ~LogisticRegression.getTol
       ~LogisticRegression.getUpperBoundsOnCoefficients
       ~LogisticRegression.getUpperBoundsOnIntercepts
       ~LogisticRegression.getWeightCol
       ~LogisticRegression.hasDefault
       ~LogisticRegression.hasParam
       ~LogisticRegression.isDefined
       ~LogisticRegression.isSet
       ~LogisticRegression.load
       ~LogisticRegression.read
       ~LogisticRegression.save
       ~LogisticRegression.set
       ~LogisticRegression.setAggregationDepth
       ~LogisticRegression.setElasticNetParam
       ~LogisticRegression.setFamily
       ~LogisticRegression.setFeaturesCol
       ~LogisticRegression.setFitIntercept
       ~LogisticRegression.setLabelCol
       ~LogisticRegression.setLowerBoundsOnCoefficients
       ~LogisticRegression.setLowerBoundsOnIntercepts
       ~LogisticRegression.setMaxBlockSizeInMB
       ~LogisticRegression.setMaxIter
       ~LogisticRegression.setParams
       ~LogisticRegression.setPredictionCol
       ~LogisticRegression.setProbabilityCol
       ~LogisticRegression.setRawPredictionCol
       ~LogisticRegression.setRegParam
       ~LogisticRegression.setStandardization
       ~LogisticRegression.setThreshold
       ~LogisticRegression.setThresholds
       ~LogisticRegression.setTol
       ~LogisticRegression.setUpperBoundsOnCoefficients
       ~LogisticRegression.setUpperBoundsOnIntercepts
       ~LogisticRegression.setWeightCol
       ~LogisticRegression.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~LogisticRegression.aggregationDepth
       ~LogisticRegression.elasticNetParam
       ~LogisticRegression.family
       ~LogisticRegression.featuresCol
       ~LogisticRegression.fitIntercept
       ~LogisticRegression.labelCol
       ~LogisticRegression.lowerBoundsOnCoefficients
       ~LogisticRegression.lowerBoundsOnIntercepts
       ~LogisticRegression.maxBlockSizeInMB
       ~LogisticRegression.maxIter
       ~LogisticRegression.params
       ~LogisticRegression.predictionCol
       ~LogisticRegression.probabilityCol
       ~LogisticRegression.rawPredictionCol
       ~LogisticRegression.regParam
       ~LogisticRegression.standardization
       ~LogisticRegression.threshold
       ~LogisticRegression.thresholds
       ~LogisticRegression.tol
       ~LogisticRegression.upperBoundsOnCoefficients
       ~LogisticRegression.upperBoundsOnIntercepts
       ~LogisticRegression.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: fit
    .. automethod:: fitMultiple
    .. automethod:: getAggregationDepth
    .. automethod:: getElasticNetParam
    .. automethod:: getFamily
    .. automethod:: getFeaturesCol
    .. automethod:: getFitIntercept
    .. automethod:: getLabelCol
    .. automethod:: getLowerBoundsOnCoefficients
    .. automethod:: getLowerBoundsOnIntercepts
    .. automethod:: getMaxBlockSizeInMB
    .. automethod:: getMaxIter
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getPredictionCol
    .. automethod:: getProbabilityCol
    .. automethod:: getRawPredictionCol
    .. automethod:: getRegParam
    .. automethod:: getStandardization
    .. automethod:: getThreshold
    .. automethod:: getThresholds
    .. automethod:: getTol
    .. automethod:: getUpperBoundsOnCoefficients
    .. automethod:: getUpperBoundsOnIntercepts
    .. automethod:: getWeightCol
    .. automethod:: hasDefault
    .. automethod:: hasParam
    .. automethod:: isDefined
    .. automethod:: isSet
    .. automethod:: load
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setAggregationDepth
    .. automethod:: setElasticNetParam
    .. automethod:: setFamily
    .. automethod:: setFeaturesCol
    .. automethod:: setFitIntercept
    .. automethod:: setLabelCol
    .. automethod:: setLowerBoundsOnCoefficients
    .. automethod:: setLowerBoundsOnIntercepts
    .. automethod:: setMaxBlockSizeInMB
    .. automethod:: setMaxIter
    .. automethod:: setParams
    .. automethod:: setPredictionCol
    .. automethod:: setProbabilityCol
    .. automethod:: setRawPredictionCol
    .. automethod:: setRegParam
    .. automethod:: setStandardization
    .. automethod:: setThreshold
    .. automethod:: setThresholds
    .. automethod:: setTol
    .. automethod:: setUpperBoundsOnCoefficients
    .. automethod:: setUpperBoundsOnIntercepts
    .. automethod:: setWeightCol
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: aggregationDepth
    .. autoattribute:: elasticNetParam
    .. autoattribute:: family
    .. autoattribute:: featuresCol
    .. autoattribute:: fitIntercept
    .. autoattribute:: labelCol
    .. autoattribute:: lowerBoundsOnCoefficients
    .. autoattribute:: lowerBoundsOnIntercepts
    .. autoattribute:: maxBlockSizeInMB
    .. autoattribute:: maxIter
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: regParam
    .. autoattribute:: standardization
    .. autoattribute:: threshold
    .. autoattribute:: thresholds
    .. autoattribute:: tol
    .. autoattribute:: upperBoundsOnCoefficients
    .. autoattribute:: upperBoundsOnIntercepts
    .. autoattribute:: weightCol

    
    
