import * as cdk from '@aws-cdk/core';
import { CommonProps } from './cluster-stack';
import { readYamlFromDir } from '../utils/read-file';

export class ContainerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: CommonProps) {
    super(scope, id, props);


  }

}


